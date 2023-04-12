/* eslint-disable no-unused-vars */
import { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import endPoints from '@services/api';

const authContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  const auth = useContext(authContext);
  return auth;
};

export const makeFetch = async (path = '', method = '', body = {}) => {
  const access_token = Cookie.get('access_token');
  const options = {
    method,
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  if (method !== 'GET') {
    options.body = JSON.stringify(body);
  }
  if (access_token) {
    options.headers.Authorization = `Bearer ${access_token}`;
  }
  const response = await fetch(path, options);
  if (!response.ok) {
    throw new Error('Request failed');
  }
  return response;
};

const useProviderAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    try {
      const response = await makeFetch(endPoints.auth.login, 'POST', { email, password });
      if (!response.ok) {
        throw new Error('Failed to log in');
      }
      const { access_token } = await response.json();
      if (access_token) {
        Cookie.set('access_token', access_token, { expires: 5 });
        const profileResponse = await makeFetch(endPoints.auth.profile, 'GET');
        if (!profileResponse.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const user = await profileResponse.json();
        setUser(user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    signIn,
  };
};

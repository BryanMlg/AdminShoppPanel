/* eslint-disable no-unused-vars */
import { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import endPoints from '@services/api';

const authContext = createContext();

const options = {
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
  },
};

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  const auth = useContext(authContext);
  return auth;
};

const useProviderAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    try {
      const response = await fetch(endPoints.auth.login, {
        method: 'POST',
        headers: options.headers,
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      const { data: access_token } = await response.json();
      alert({access_token});
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    signIn,
  };
};

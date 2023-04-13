import { makeFetch } from './useAuth';
import endPoints from '@services/api';
import { useState, useEffect } from 'react';


const useGetProducts = (PRODUCT_LIMIT, PRODUCT_OFFSET) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await makeFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET), 'GET');
        const data = await response.json();
        setProducts(
          data.filter(item => {
            return item;
          })
        );
      } catch (error) {
        alert(error);
      }
    })();
  },[PRODUCT_LIMIT, PRODUCT_OFFSET]);

  return products;
};

export default useGetProducts;

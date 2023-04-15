import { makeFetch } from './useAuth';
import endPoints from '@services/api';
import { useState, useEffect } from 'react';


const useGetProducts = (PRODUCT_LIMIT, PRODUCT_OFFSET) => {
  const request = (PRODUCT_LIMIT, PRODUCT_OFFSET) ? `${endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET)}` : `${endPoints.products.getAllProducts}`;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await makeFetch(request, 'GET');
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
  },[request]);

  return products;
};

export default useGetProducts;

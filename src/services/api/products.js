import endPoints from '.';
import { makeFetch } from '@hooks/useAuth';

const addProduct = async body => {
  try {
    const response = await makeFetch(endPoints.products.addProducts, 'POST', body);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error adding product');
  }
};

export default addProduct;

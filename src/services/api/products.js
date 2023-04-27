/* eslint-disable no-console */
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

const deleteProduct = async id => {
  try {
    const response = await makeFetch(endPoints.products.deleteProduct(id), 'DELETE');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting product');
  }
};

const updateProduct = async (id, body) => {
  try {
    const response = await makeFetch(endPoints.products.updateProduct(id), 'PUT', body);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating product');
  }
};

export { addProduct, deleteProduct, updateProduct };

import fetchData from './utils';
import { CartItem } from '../interfaces/queries.interfaces';

const getCartItems = async (userID: string): Promise<CartItem[]> => {
  try {
    const response = await fetchData(`/cartItems?userID=${userID}`, 'GET');
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export { getCartItems };

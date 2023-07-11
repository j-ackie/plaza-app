import fetchData from './utils';
import { Item } from '../interfaces/queries.interfaces';

const getItems = async (itemIDs: string[]): Promise<Item[]> => {
  try {
    let url = '/items?';

    for (const itemID of itemIDs) {
      url += `_id=${itemID}&`;
    }

    const response = await fetchData(url, 'GET');

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export { getItems };

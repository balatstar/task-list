import { getItems, setItems } from './storage.js';

export const updateItem = (index, key, value) => {
  const items = getItems();
  items[index][key] = value;
  setItems(items);
};

export const deleteItem = (index) => {
  const items = getItems();
  items.splice(index, 1);
  setItems(items);
};
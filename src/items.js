import { getItems, setItems } from './storage.js';

export const updateItem = (index, key, value) => {
  const items = getItems();
  items[index][key] = value;
  items[index]['index'] = index; 
  setItems(items);
};

export const deleteItem = (index) => {
  const items = getItems();
  items.splice(index, 1);

  // Update the extraKey value for the remaining items
  items.forEach((item, idx) => {
    item.extraKey = idx;
  });

  setItems(items);
};
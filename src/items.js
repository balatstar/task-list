import { getItems, setItems } from './storage.js';

export const updateItem = (index, key, value) => {
  const items = getItems();
  items[index][key] = value;
  items[index].index = index;
  setItems(items);
};

export const deleteItem = (index) => {
  let items = getItems();
  items.splice(index, 1);

  // Update the index value for the remaining items
  items = items.map((item, idx) => {
    item.index = idx;
    return item;
  });

  setItems(items);
};
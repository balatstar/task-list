import { getItems, setItems } from './storage.js';
import { refreshList } from './list.js';

const clearCompletedItems = () => {
  let items = getItems();

  // Filter out completed items
  const updatedItems = items.filter(item => !item.completed);

  // Update the index values for the remaining items
  updatedItems.forEach((item, index) => {
    item.index = index;
  });

  setItems(updatedItems);
  refreshList();
};

export default clearCompletedItems;

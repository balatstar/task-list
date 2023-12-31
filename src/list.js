import { getItems, setItems } from './storage.js';
import createItemElement from './template.js';
import { postContainer, addButton, addNewInput } from './elements.js';

const refreshList = () => {
  const items = getItems();
  postContainer.innerHTML = '';

  items.forEach((item, index) => {
    const itemElement = createItemElement(item, index);
    postContainer.appendChild(itemElement);
  });
};

const addItem = () => {
  const description = addNewInput.value;

  const items = getItems();
  items.push({
    description,
    completed: false,
    index: items.length,
  });
  setItems(items);

  addNewInput.value = ''; // Clear the input field after adding the item
  postContainer.dispatchEvent(new CustomEvent('itemAdded'));
};

const clearCompletedItems = () => {
  const items = getItems();

  // Filter out completed items
  const updatedItems = items.filter((item) => !item.completed);

  // Update the index values for the remaining items
  updatedItems.forEach((item, index) => {
    item.index = index;
  });

  setItems(updatedItems);
  refreshList();
};

const initializeList = () => {
  refreshList();

  addButton.addEventListener('click', addItem);

  addNewInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default form submission behavior
      addItem();
    }
  });

  const clearCompletedBtn = document.getElementById('clearCompletedBtn');
  clearCompletedBtn.addEventListener('click', clearCompletedItems);

  postContainer.addEventListener('itemAdded', refreshList);
  postContainer.addEventListener('itemChanged', refreshList);
  postContainer.addEventListener('itemDeleted', refreshList);
};

export { refreshList, initializeList };

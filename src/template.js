import More from './more.png';
import Delete from './delete.png';

import { updateItem, deleteItem } from './items.js';
import { postContainer } from './elements.js';

export const createItemElement = (item, index) => {
  const itemElement = document.createElement('div');
  itemElement.classList.add('task-group');
  itemElement.innerHTML = `
    <input class="task-item" type="checkbox">
    <input class="task-item-text" placeholder="Task item...">
  `;

  const myIcon = new Image();
  myIcon.src = More;
  myIcon.classList.add('task-item-more');
  itemElement.appendChild(myIcon);

  const myDelete = new Image();
  myDelete.src = Delete;
  myDelete.classList.add('task-item-delete');
  itemElement.appendChild(myDelete);

  const descriptionInput = itemElement.querySelector('.task-item-text');
  const completedInput = itemElement.querySelector('.task-item');
  const deleteButton = itemElement.querySelector('.task-item-delete');

  descriptionInput.value = item.description;
  completedInput.checked = item.completed;

  descriptionInput.addEventListener('change', () => {
    const newValue = descriptionInput.value;
    item.description = newValue;
    updateItem(index, 'description', newValue);
    itemElement.dispatchEvent(new CustomEvent('itemChanged'));
  });

  completedInput.addEventListener('change', () => {
    const newValue = completedInput.checked;
    item.completed = newValue;
    updateItem(index, 'completed', newValue);
    itemElement.dispatchEvent(new CustomEvent('itemChanged'));
  });

  deleteButton.addEventListener('click', () => {
    deleteItem(index);
    postContainer.dispatchEvent(new CustomEvent('itemDeleted'));
  });

  return itemElement;
};
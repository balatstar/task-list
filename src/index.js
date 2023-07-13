import './style.css';
import More from './more.png';
import Delete from './delete.png';

function getItems() {
  const value = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  return value;
}

function setItems(items) {
  const itemsJson = JSON.stringify(items);
  localStorage.setItem('tasks', itemsJson);
}

const postContainer = document.querySelector('.tasklist');
const addButton = document.querySelector('.newtask-return');
let items = getItems();

function updateItem(index, key, value) {
  items[index][key] = value;
  setItems(items);
}

function deleteItem(index) {
  items.splice(index, 1);
  setItems(items);
  postContainer.dispatchEvent(new CustomEvent('itemDeleted'));
}

const createItemElement = (item, index) => {
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
  });

  return itemElement;
};

function refreshList() {
  postContainer.innerHTML = '';

  items.forEach((item, index) => {
    const itemElement = createItemElement(item, index);
    postContainer.appendChild(itemElement);
  });
}

function addItem() {
  const addNewInput = document.getElementById('addnew');
  const description = addNewInput.value;

  items.push({
    description,
    completed: false,
  });

  setItems(items);
  addNewInput.value = ''; // Clear the input field after adding the item
  postContainer.dispatchEvent(new CustomEvent('itemAdded'));
}

addButton.addEventListener('click', () => {
  addItem();
});

const addNewInput = document.getElementById('addnew');

addNewInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default form submission behavior
    addItem();
  }
});

postContainer.addEventListener('itemAdded', refreshList);
postContainer.addEventListener('itemChanged', refreshList);
postContainer.addEventListener('itemDeleted', refreshList);

refreshList();

const getItems = () => {
  const value = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  return value;
};

const setItems = (items) => {
  const itemsJson = JSON.stringify(items);
  localStorage.setItem('tasks', itemsJson);
};

export { getItems, setItems };
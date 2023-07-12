import _ from 'lodash';
import './style.css';
import More from './more.png';

const cardData = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: '3',
  },
  {
    description: 'Complete the project',
    completed: false,
    index: '2',
  },
  {
    description: 'Submit for code review',
    completed: false,
    index: '1',
  },
  ];
  
  const postContainer = document.querySelector('.tasklist');
  
  const postMethods = () => {
    // Sort the cardData array by the index value in ascending order
    const sortedData = _.sortBy(cardData, [(data) => parseInt(data.index)]);
  
    sortedData.forEach((postData) => {
      const postElement = document.createElement('div');
      postElement.classList.add('task-group');
      postElement.innerHTML = `
        <input id="${postData.index}" type="checkbox" name="task-item" value="${postData.index}"> <input id="input-${postData.index}" class="task-item-text" placeholder="${postData.description}">
      `;
      const myIcon = new Image();
      myIcon.src = More;
      myIcon.classList.add('task-item-more');
      postElement.appendChild(myIcon);
  
      postContainer.appendChild(postElement);
    });
  };
  
  postMethods();
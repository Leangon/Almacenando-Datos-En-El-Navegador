import { displayTask } from "./readTask.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const list = document.querySelector('[data-list]');
  list.innerHTML = '';
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const index = tasks.findIndex((item) => item.id === id);
  console.log(tasks);
  tasks.splice(index,1)
  
  localStorage.setItem('tasks', JSON.stringify(tasks))
  console.log(tasks);
  displayTask();
};

export default deleteIcon;

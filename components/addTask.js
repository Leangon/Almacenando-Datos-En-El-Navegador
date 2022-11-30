import { uniqueDates } from '../service/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTask } from "./readTask.js";


export const addTask = (evento) => {
    evento.preventDefault();
    //*Capturo el <ul> en la var list
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    //*Capturamos el input del calendario, guardo el valor del input en la variable date, y por ultimo le doy el formato que quiero y lo guardo en la var dateFormat
    const calendar = document.querySelector('[data-form-date]')
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    //*Valido si el valor y la fecha no es vacio
    if (value === '' || date === '') {
        return 
    }

    //*Dejamos el valor del input, el del calendar y el d list <ul> vacio.
        input.value = '';
        calendar.value = '';
        list.innerHTML = '';
    //*Guardo los datos del valor y fecha en un objeto y a este objeto lo guardamos en listaTarea

    const complete = false;
    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    };
    console.log(taskObj);
    //*Los datos se guardan en localStorage y este en la aplicaion.
    const listaTarea = JSON.parse(localStorage.getItem('tasks')) || [];
          listaTarea.push(taskObj);
    //* Con sessionStorage los datos persisten solo mientras la pestaña este abierta. setItem recibe dos parametros: clave, valor
    //sessionStorage.setItem("tasks", JSON.stringify(taskObj))
    //* Con localStorage los datos persisten más alla de que cerremos el navegador.
          localStorage.setItem("tasks", JSON.stringify(listaTarea))
    //*CreateTask va a recibir el objeto como parametro y lo va a guardar en task
    displayTask();
  }
  
  export const createTask = ({value, dateFormat, complete, id}) => {
    //*Creo un <li> y lo guardo en var task, le asigno una clase.
    const task = document.createElement('li');
          task.classList.add('card');
    //*Creo un span lo guardo en titleTask, le asigno una clase, y le agrego el valor del input
    const titleTask = document.createElement('span');
          titleTask.classList.add('task');
          titleTask.innerText = value;
    //*Creo un div y lo guardo en taskContent, le agregamos el check y el span
    const taskContent = document.createElement('div');
    //*guardo la estructura HTML en chek y le modificamos la clase para cuando complete es true.
    const chek = checkComplete(id)
          if (complete) {
            chek.classList.toggle('fas');
            chek.classList.toggle('completeIcon');
            chek.classList.toggle('far');
          }
          taskContent.appendChild(chek);
          taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    //*Creo otro span para la fecha, le agrego la fecha formateada guardada en la var dateFormat.
    const dateElement = document.createElement("span")
          dateElement.innerHTML = dateFormat;
    //*Agrego al li el div, la fecha, el icono con su funcion de borrar.
          task.appendChild(taskContent);
          task.appendChild(dateElement);
          task.appendChild(deleteIcon(id));
    return task
  };
import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates } from "../service/date.js";

//!Crea el <li> que contiene la fechas, agrega las fechas, y le agrega la listas de tareas que se corresponde con esa fecha.
export const displayTask = () => {
    const list = document.querySelector('[data-list]');
    //*Obtengo la lista del localStorage
    const listaTarea = JSON.parse(localStorage.getItem("tasks")) || [];
    //*Creo un array solo con fechas sin repetir
    const dates = uniqueDates(listaTarea);
    //*Recorro el array
          dates.forEach(dat => {
    //*Al <ul> le agrego un li con el valor fecha llamando a la funcion dateElement.
          list.appendChild(dateElement(dat))
    //*Recorro la lista y con los valores del objeto llamo la funcion creatTask que me crea toda la estructura HTML, y solo la agrego si la fecha es igual a la fecha del li que solo contiene fechas.
          listaTarea.forEach(element => {
            if (dat == element.dateFormat) {
                list.appendChild(createTask(element));
            }
            });
          });
    }
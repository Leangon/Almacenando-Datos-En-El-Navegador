import { addTask } from "./components/addTask.js";
import { displayTask } from "./components/readTask.js";

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
//! Cuando doy al boton escucha el evento clik y llama a la funcion addTask. Ejecuta la funciòn displayTask.
btn.addEventListener('click', addTask);

displayTask();
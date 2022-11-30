//!Crea un elemento <li>, le agrega una clase y lo rellena su contenido con la fecha que le pasemos. retorna la constante.

export default (date) => {
    const dateElement = document.createElement("li")
    dateElement.classList.add('date')
    dateElement.innerHTML = date;
    return dateElement;
}
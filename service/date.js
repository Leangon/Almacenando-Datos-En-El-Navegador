//!Agrego a un array solo los valores sin repetir y los ordeno de menor a mayor. Me sirve para crear los li que contienen solo las fechas.
export const uniqueDates = (elemento) => {
    const unique = [];
    elemento.forEach( element => {
        if (!unique.includes(element.dateFormat)) {
            unique.push(element.dateFormat)
        }
    })
    unique.sort((a, b) => moment(a, 'DD-MM-YYYY') - moment(b, 'DD-MM-YYYY'))
    return unique; 
}
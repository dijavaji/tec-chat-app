//funcion calcula la suma de un array de objeto pasando el atributo property
export const  calculateSum = (array, property) => {
    const total = array.reduce((accumulator, object) => {
        return accumulator + object[property];
    }, 0);
    return total;
}

//Truncating a string is useful when we want to display only a certain number of the characters
export const truncateDots = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

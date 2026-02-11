const nombre = document.querySelector("#name");
const password = document.getElementById("password");
const boton = document.getElementById("btn");

console.log(nombre);
console.log(password);

boton.addEventListener("click", () => {
    const nombreCapturado = nombre.value;
    const passwordCapturado = password.value;
    console.log(nombreCapturado);
    console.log(passwordCapturado);
})


/* const sumar = (a, b) => {a + b};
//Funciones
*/
/* function sumar(a, b) {
    let resultado = a + b;
    return resultado;
} */










let suma = sumar(5, 6);
console.log(suma);

console.log(sumar(10, 6));
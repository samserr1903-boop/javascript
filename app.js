// let dolares = parseFloat(prompt("Ingrese la cantidad de dólares "));

// let tasaCambio = 3200; 

// let pesos = dolares * tasaCambio;

// console.log("La cantidad en pesos colombianos es: $" + pesos);




// for(let i =1 ; i < 20 ; i++){

// console.log("hola")

// }

// let carros = ["bmw " , "mercedez" , "audi" , "mazda"]

// console.log( carros.includes ("bmw "))

// let numero = 7;

// for (let i = 1; i <= 10; i++) {
//     console.log(numero + " x " + i + " = " + (numero * i));
// }
// let contraseña = prompt("Ingrese su contraseña");

// if (contraseña == "123456") {
//     console.log("La contraseña es segura");
// } else {
//     console.log("La contraseña no es segura");
// }
let contraseña = prompt("Ingrese una contraseña");

let contador = 0;

for (let i = 0; i < contraseña.length; i++) {
    contador++;
}

if (contador >= 8) {
    console.log("La contraseña es segura");
} else {
    console.log("La contraseña no es segura");
}
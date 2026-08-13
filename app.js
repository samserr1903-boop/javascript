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
// let contraseña = prompt("Ingrese una contraseña");

// let contador = 0;

// for (let i = 0; i < contraseña.length; i++) {
//     contador++;
// }

// if (contador >= 8) {
//     console.log("La contraseña es segura");
// } else {
//     console.log("La contraseña no es segura");
// }


// let random = Math.floor(Math.random() * 5) + 1;
// let gano = false;

// for (let i = 1; i <= 5; i++) {
//     let numero = Number(prompt("Intento " + i + ": Escribe un número del 1 al 5"));

//     if (numero == random) {
//         console.log("¡Ganaste!");
//         gano = true;
//         break;
//     } else {
//         console.log("No es ese número.");
//     }
// }

// if (gano == false) {
//     console.log("Perdiste. El número era: " + random);
// }
let estudiantes = [
    {
        nombre: "shakira",
        nota: 4
    },
    {
        nombre: "ñengo",
        nota: 6.2
    },
    {
        nombre: "andres",
        nota: 1.5
    }
];

for (let i = 0; i < estudiantes.length; i++) {

    console.log(`el estudiante ${estudiantes[i].nombre} y su nota es ${estudiantes[i].nota}`)

    if (estudiantes[i].nota >= 3) {
       console.log (`${estudiantes[i].nombre} aprobó la materia.`);
    } else {
        console.log(`${estudiantes[i].nombre} no aprobó la materia.`);
    }

}


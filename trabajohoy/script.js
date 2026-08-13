function sumar(a,b){
    console.log(a+b)
}

function restar(a,b){
    console.log(a-b)
}

function mult(a,b){
    console.log(a*b)
}

function dividir(a,b){
    console.log(a/b)
}

let operacion = prompt (`  
    Que operacion quieres realiar?
    1)sumar
    2)restar
    3)multiplicar
    4)dividir
    `)
let n1 = Number(prompt("Ingrese el primer digito"))
let n2 = Number(prompt("Ingrese el Segundo digito"))

if(operacion === "sumar"){
    sumar(n1,n2)
}else if(operacion === "restar"){
    restar(n1,n2)
}else if(operacion === "multiplicar"){
    mult(n1,n2)
}else if(operacion === "dividir"){
    dividir(n1,n2)
}else{
    console.log("ESCRIBE BIEN !")
}

 
require('colors');

const functions = require('./modues/functions.js')

const contador = 10;

const main = async() =>{
    const numero = -6;
    functions.interfazSingno(numero);

    const caracter = 'c';
    functions.interfazEncontroCaracter(caracter);

    const bebida = `gaseosa`;
    functions.interfazBusquedaBebida(bebida);

    const medio = `carro`;
    functions.interfazMedioTrasporte(medio);

    const cantidad = 5;
    const precio = 50;
    const descuento = 0.1;
    functions.interfazFacturaProducto(cantidad, precio, descuento);

    const menu =`pescado`;
    functions.interfazbebidaComida(menu);
    

    const pago = `2000`;
    functions.interfazSalaJuegos(pago);

    const numero1 = 8
    functions.interfazContarNumero(numero1);

    const numero2 = 10
    functions.interfazNumerosPares(numero2)

    const numer = 10
    functions.interfazTablaMultiplicar(numer);


    const numerooo = 2
    functions.interfazContadorbase(numerooo);


   const caracter1 = `b`;
   const repetir = 5;
   functions.interfazRepetirCaracter(caracter1, repetir);

   const clave = ["clave", "clave0", "clave3"];
   functions.interfazInicioSesion(clave);


   const numeros = [1, 6, 4, 7, 8, 13, 21, 2];
   functions.minimoMaximoo(numeros)

   const numeross = [10, 5, 8, 2, 15];
  functions.interfazNumerosparees(numeross);



};




main();
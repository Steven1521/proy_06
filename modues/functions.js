const functions = {};

const signo = (numero) => {
    if (numero >= 0) {
        return `postivo`
    } else {
        return `negativo`
    }
}

const encontrarCaracter = (caracter) => {
    const datos = ['A', 'B', 'C', 'D', 'E'];
    if (datos.includes(caracter)) {
        return `se encuentra`;
    } else {
        return `no se encuentra`;
    }
}

const busquedaBebida = (bebida) => {
    switch (bebida) {
        case `vino`:
        case `cerveza`:
        case `gaseosa`:
        case `agua`:
            return `Ìr a la barra`;
        default:
            return `Ir a la tienda`;
    }
}

const medioTransporte = (medio) => {
    switch (medio) {
        case `avion`:
        case `flota`:
            return 'asegurate de llevar dinero';
        case `carro`:
        case `bicicleta`:
            return 'recuerda llevar la ropa adecuada';
        default:
            return `medio de transporte no reconocido`;
    }
}

const facturaProducto = (cantidad, precio, descuento) => {
    if (cantidad > 0 || precio > 0 || descuento >= 0 || descuento <= 100) {
        const subtotal = cantidad * precio;
        const descuentoMonto = (descuento / 100) * subtotal;
        const precioVenta = subtotal - descuentoMonto;
        return precioVenta

    } else {
        return `Verifica los valores`;

    }

}

const bebidaComida = (menu) => {
    let recomendacion = ``
    switch (menu) {
        case 'carne':
            recomendacion = `te recomendamos vino tinto`;
            break;
        case 'pescado':
            recomendacion = `te recomendamos vino blanco`;
            break;
        case 'verduras':
            recomendacion = `te recomendamos agua`;
            break;

        default:
            recomendacion = `te recomendamos agua`;
            break;
    }

    return recomendacion;
}

const salaJuegos = (pago) => {
    if (pago >= 4000) {
        return `Accedes a todos los juegos: consolas, juegos 2D, juegos 3D, realidad virtual`;
    } else if (pago >= 3000) {
        return `accedes a los juegos: consolas, juegos 2D, juegos 3D`;
    } else if (pago >= 2000) {
        return `Accedes a los juegos: consolas, juegos 2D`;
    } else if (pago >= 1000) {
        return `Accedes al juego: consolas`;
    } else {
        return `debes ingresar mas dinero para acceder  los juegos`;
    }
}

const contarNumero = (numero) => {
    if (numero <= 0) {
        return `el numero debe de ser positivo`
    }

    let enterosPositivos = "";
    for (let i = 1; i <= numero; i++) {
        console.log('*'.magenta + '      ' + (i) +
            '                   *'.magenta);
    }
    return enterosPositivos.trim();
}

const numerosPares = (numero2) => {

    for (let i = 0; i <= numero2; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }

    }
}




const tablaMultiplicar = (numer) => {
    for (let i = 1; i <= 10; i++) {
        const resultado = numer * i;
        console.log(`${numer} * ${i} = ${resultado}`);

    }
}

const repetirCaracter = (caracter1, repetir) => {
    let resultado = '';
    for (let i = 0; i < repetir; i++) {
        resultado += caracter1;
    }
    return resultado;
}


const contadorBase = (base) => {
    if (base < 2 || base > 16) {
        return [];
    }

    const dosDigiteNumeros = [];
    for(let firstDigit = 0; firstDigit < base; firstDigit++){
        for(let secondDigit = 0; secondDigit <base; secondDigit++){
            const numberInbaseN = `${firstDigit} ${secondDigit}`;
            dosDigiteNumeros.push(numberInbaseN);
        }
    }
    return dosDigiteNumeros;
}

const basetenNumbers = contadorBase(10);
console.log(basetenNumbers);




const inicioSesion = (clave) => {
    const contraseña = ["clave1", "clave2", "clave3"];
    let intentosFallidos = 3;

    for (let intento = 0; intento < 3; intento++) {
        
        if (contraseña.includes(clave[intento])) {
            console.log("acceso concenido");
            return;
        } else {
            intentosFallidos = intento +1;
            console.log(`intentos ${intentosFallidos} FALLIDO. TE QUEDA ${3 - intentosFallidos} intentos.`);
        }
    }
    if (intentosFallidos === 3) {
        console.log("intruso detectado. Alerta de seguridad activada");
    }   
        
    
}




const minimoMaximo = (numeros) => {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return "Por favor, proporciona un arreglo válido de números.";
    }

    let numeroMenor = numeros[0];
    let numeroMayor = numeros[0];
    let sumaTotal = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeroMenor) {
            numeroMenor = numeros[i];
        }
        if (numeros[i] > numeroMayor) {
            numeroMayor = numeros[i];
        }
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;

    return {
        numeroMenor,
        numeroMayor,
        promedio,
    };
};

const numerosParees = (numeross) => {
    if (!Array.isArray(numeross) || numeross.length === 0) {
        return "Por favor, proporciona un arreglo válido de números.";
    }

    let numerosPares = [];
    let cantidadPares = 0;

    for (let i = 0; i < numeross.length; i++) {
        if (numeross[i] % 2 === 0) {
            numerosPares.push(numeross[i]);
            cantidadPares++;
        }
    }

    return {
        numerosPares,
        cantidadPares,
    };
};
const arregloNumeros = [10, 5, 8, 2, 15];
const resultado = numerosParees(arregloNumeros);












const interfazSingno = (numero) => {
    // console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION SIGNO'.bgBlue, '                *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `El numero ${numero} es`.bgBlue + functions.signo(numero) + `   *`.magenta);
    console.log(`*************************************\n`.magenta);

}

const interfazEncontroCaracter = (caracter) => {
    //console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION ENCONTRO CARACTER'.bgBlue, '       *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `El caracter ${caracter.toUpperCase()} `.bgBlue + functions.encontrarCaracter(caracter.toUpperCase()) + `   *`.magenta);
    console.log(`*************************************\n`.magenta);

}

const interfazBusquedaBebida = (bebida) => {
    // console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION BUSQUEDA BEBIDA'.bgBlue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `La bebida ${bebida}`.bgBlue + functions.busquedaBebida(bebida) + `     *`.magenta);
    console.log(`*************************************\n`.magenta);

}

const interfazMedioTrasporte = (medio) => {
    // console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION MEDIO DE TRASPORTE'.bgBlue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `El medio ${medio}`.bgBlue + functions.medioTransporte(medio) + `    *`.magenta);
    console.log(`*************************************\n`.magenta);

}

const interfazFacturaProducto = (cantidad, precio, descuento) => {
    // console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION FACTURA PRODUCTO'.bgBlue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `CANTIDAD, PRECIO, DESCUENTO`
        + functions.facturaProducto(cantidad, precio, descuento) +
        `\n descuento es de: ${cantidad, precio, descuento}`);
    console.log(`*************************************\n`.magenta);

}

const interfazbebidaComida = (menu) => {
    // console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION BEBIDA COMIDA'.bgBlue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `El MENU ${menu}`.bgBlue + functions.bebidaComida(menu) + `    *`.magenta);
    console.log(`*************************************\n`.magenta);

}

const interfazSalaJuegos = (pago) => {
    // console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION SALA DE JUEGOS'.bgBlue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `El pago ${pago}`.bgBlue +
        functions.salaJuegos(pago) + `    *`.magenta);
    console.log(`*************************************\n`.magenta);

}

const interfazContarNumero = (numero) => {
    // console.clear;
    console.log(`****************************`.magenta);
    console.log('*    '.magenta, 'FUNCION contar numero'.bgBlue, '*'.magenta);
    console.log(`****************************`.magenta);
    console.log('*  '.magenta, `El numero ${numero}`.bgBlue + functions.contarNumero(numero) +
        `            *`.magenta);
    console.log(`****************************\n`.magenta);

}

const interfazNumerosPares = (numero2) => {
    // console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION NUMEROS PARES'.bgBlue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `El NUMERO ${numero2}`.bgBlue + functions.numerosPares(numero2) + `    *`.magenta);
    console.log(`*************************************\n`.magenta);

}


const interfazContadorbase = (base) =>{
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION  CONTADOR BASE'.blue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `CONTADOR ${base}`.bgBlue + functions.contadorBase(base) + `    *`.magenta);
    console.log(`*************************************\n`.magenta);


}


const interfazTablaMultiplicar = (numer) => {
    // console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION  TABLA DE MULTIPLICAR'.bgBlue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `El medio ${numer}`.bgBlue + functions.tablaMultiplicar(numer) + `    *`.magenta);
    console.log(`*************************************\n`.magenta);

}

const interfazRepetirCaracter = (caracter1, repetir) => {
    console.log(`*******************************`.green);
    console.log(`*    CONTADOR DE CARCATER     *`.green);
    console.log(`*******************************`.green);
    console.log(`*`.green + `  CONTANDO  ${caracter1, repetir} ` +
        functions.repetirCaracter(caracter1, repetir) + `          *`.green);
    console.log(`*******************************\n`.green);

}

const interfazInicioSesion = (claves) => {
    // console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION INICIO DE SESION'.bgBlue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta + functions.inicioSesion(claves) + `    *`.magenta);
    console.log(`*************************************\n`.magenta);

}


const interfazMinimoMaximo = (numeros) => {
    // console.clear;
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION NUMERO MAXIMO '.bgBlue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `EL NUMERO ${numeros}`.bgBlue + functions.minimoMaximo(numeros) + `    *`.magenta);
    console.log(`*************************************\n`.magenta);

}

const minimoMaximoo = (numeross) => {
    if (!Array.isArray(numeross) || numeross.length === 0) {
        return;
    }

    const minNumero = Math.min(...numeross);
    const maxNumero = Math.max(...numeross);
    const sum = numeross.reduce((total, num) => total + num, 0);
    const Promedio = sum / numeross.length;

    console.log(`*******************************`.green);
    console.log(`*   FUNCION MIN, MAX Y PROX   *`.green);
    console.log(`*******************************`.green);
    console.log(`*******************************`.green);
    console.log(`*      `.green + `Número menor: ${minNumero}` + `        *`.green);
    console.log(`*      `.green + `Número mayor: ${maxNumero}` + `        *`.green);
    console.log(`*      `.green + `Promedio: ${Promedio}` + `        *`.green);
    console.log(`*******************************`.green);
};

const interfazNumerosparees = (numeross) => {
    console.log(`*************************************`.magenta);
    console.log('*    '.magenta, 'FUNCION NUMEROS PARES'.bgBlue, '     *'.magenta);
    console.log(`*************************************`.magenta);
    console.log('*  '.magenta, `Los numeros son ${numeross}`.bgBlue + functions.numerosParees(numeross) + `    *`.magenta);
    console.log(`*************************************\n`.magenta);

}




















functions.signo = signo;
functions.interfazSingno = interfazSingno;
functions.encontrarCaracter = encontrarCaracter;
functions.interfazEncontroCaracter = interfazEncontroCaracter;
functions.busquedaBebida = busquedaBebida;
functions.interfazBusquedaBebida = interfazBusquedaBebida;
functions.medioTransporte = medioTransporte;
functions.interfazMedioTrasporte = interfazMedioTrasporte;
functions.facturaProducto = facturaProducto;
functions.interfazFacturaProducto = interfazFacturaProducto;
functions.bebidaComida = bebidaComida;
functions.interfazbebidaComida = interfazbebidaComida;
functions.salaJuegos = salaJuegos;
functions.interfazSalaJuegos = interfazSalaJuegos;
functions.contarNumero = contarNumero;
functions.interfazContarNumero = interfazContarNumero;
functions.tablaMultiplicar = tablaMultiplicar;
functions.interfazTablaMultiplicar = interfazTablaMultiplicar;
functions.contadorBase = contadorBase;
functions.interfazContadorbase = interfazContadorbase;
functions.numerosPares = numerosPares;
functions.interfazNumerosPares = interfazNumerosPares;
functions.repetirCaracter = repetirCaracter;
functions.interfazRepetirCaracter = interfazRepetirCaracter;
functions.inicioSesion = inicioSesion;
functions.interfazInicioSesion = interfazInicioSesion;
functions.minimoMaximo = minimoMaximo;
functions.interfazMinimoMaximo = interfazMinimoMaximo;
functions.minimoMaximoo = minimoMaximoo;
functions.numerosParees = numerosParees;
functions.interfazNumerosparees = interfazNumerosparees;

module.exports = functions;
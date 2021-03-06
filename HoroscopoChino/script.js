function calcular(anyo) {
    let signos = ['Mono', 'Gallo', 'Perro', 'Jabalí', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'];

    let elementos = ['metal', 'metal', 'agua', 'agua', 'madera', 'madera', 'fuego', 'fuego', 'tierra', 'tierra'];

    let signo, elemento ='';
    if ( !/^[1-9]([0-9]{1,4})?$/.test(anyo) ) {
        signo = 'Año no válido.'
    } else {
        signo = calcular2(signos,reducir(anyo));
        elemento = ` de ${calcular2(elementos,reducir2(anyo))}`;
    }

    return signo+elemento;
}

function reducir(anyo) {
    while (!/^([0-9]|([1][0-1]))$/.test(anyo)) {
        anyo -= 12;
    }
    return anyo;
}

function reducir2(anyo) {
    return anyo[anyo.length-1];
}

function calcular2(arr, input) {
    for (let i in arr) {
        if (input == i) {
            return arr[i];
        }
    }
}

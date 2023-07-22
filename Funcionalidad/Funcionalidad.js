/* En este archivo se unirán todas las funcionalidades */
/* POR FAVOR NO TOCAR */

function calcularMontoCompuesto1(C, i, n) {
    if (C <= 0 || i <= 0 || n <= 0) {
        return "Error, los datos no pueden ser menores a 1"
    } else {
        return C * Math.pow(1 + i, n);
    }
}

function calcularMontoCompuesto2(C, I) {
    if (C <= 0 || I <= 0) {
        return "Error, los datos no pueden ser menores a 1"
    } else {
        return C + I;
    }
}

function calcularInteresCompuesto(S, C) {
    if (S <= 0 || C <= 0) {
        return "Error, los datos no pueden ser menores a 1"
    } else {
        return S - C;
    }
}

function calcularCapitalCompuesto(S, i, n) {
    if (S <= 0 || i <= 0 || n <= 0) {
        return "Error, los datos no pueden ser menores a 1"
    } else {
        return S / Math.pow(1 + i, n);
    }
}

/* Comienzo funciones de anualidad */
function calcularMontoAnualidad(n, i, R) {
    if (n <= 0 || i <= 0 || R <= 0) {
        return "Error, los datos no pueden ser menores a 1"
    } else {
        let S = R * (((1 + i) ** n - 1) / i);
        return S.toFixed(2);
    }

}

function calcularValorPresenteAnualidad(n, i, R) {
    if (n <= 0 || i <= 0 || R <= 0) {
        return "Error, los datos no pueden ser menores a 1"
    } else {
        let A = R * ((1 - (1 + i) ** (-n)) / i)
        return A.toFixed(2);
    }
}

function imprimirCompuesto1() {
    let capital = parseFloat(document.getElementById("Capital").value);
    let tasa = parseFloat(document.getElementById("TasaInteres").value);
    let periodos = parseFloat(document.getElementById("NumPeriodos").value);
    if (periodos != 0) {
        /* Se busca cuanto equivale el interes segun el periodo */
        let i = calcularI(tasa / 100, periodos);
        let S = calcularMontoCompuesto1(capital, i, periodos);
        /* p = parrafo en el Front */
        let p = document.getElementById("respuesta");
        /* Se imprime el valor de A en el párrafo del front-end */
        p.innerHTML = S;
    }
}


function imprimirA() {
    /* Obteniedo los valores del Front-end */
    let capital = parseFloat(document.getElementById("montoC1").value);
    let tiempo = parseFloat(document.getElementById("tiempo").value);
    let periodo = parseInt(document.getElementById("periodo").value);
    let interes = parseFloat(document.getElementById("interesC1").value);
    /* 0 = seleccionar un periodo */
    if (periodo != 0) {
        /* Se busca cuanto equivale tiempo según el periodo */
        let n = calcularN(tiempo, periodo);
        /* Se busca cuanto equivale el interes segun el periodo */
        let i = calcularI(interes / 100, periodo);
        /* Ya que tenemos todos los valores definidos ejecutamos la función que realiza los cálculos */
        let A = calcularValorPresenteAnualidad(n, i, capital);
        /* p = parrafo en el Front */
        let p = document.getElementById("resultA");
        /* Se imprime el valor de A en el párrafo del front-end */
        p.innerHTML = A;
    } else {
        alert("*** Debe seleccionar un periodo ***");
    }

}
function imprimirS() {
    /* Obteniedo los valores del Front-end */
    let capital = parseFloat(document.getElementById("montoC2").value);
    let tiempo = parseFloat(document.getElementById("tiempo2").value);
    let periodo = parseInt(document.getElementById("periodo2").value);
    let interes = parseFloat(document.getElementById("interesC2").value);
    /* 0 = seleccionar un periodo */
    if (periodo != 0) {
        /* Se busca cuanto equivale tiempo según el periodo */
        let n = calcularN(tiempo, periodo);
        /* Se busca cuanto equivale el interes segun el periodo */
        let i = calcularI(interes / 100, periodo);
        /* Ya que tenemos todos los valores definidos ejecutamos la función que realiza los cálculos */
        let S = calcularMontoAnualidad(n, i, capital);
        /* p = parrafo en el Front */
        let p = document.getElementById("resultS");
        /* Se imprime el valor de A en el párrafo del front-end */
        p.innerHTML = S;
    } else {
        alert("*** Debe seleccionar un periodo ***");
    }

}
function calcularN(t, p) {
    /* 2 = Semestralmente */
    if (p == 2) {
        return t * 2

        /* 3 = Trimestralmente */
    } else if (p == 3) {
        return t * 4;

        /* Mensualmente */
    } else if (p == 4) {
        return t * 12;
    }

    /* Anualmente */
    return t;
}
function calcularI(i, p) {
    /* Lo mismo pasa acá */
    if (p == 2) {
        return i / 2
    } else if (p == 3) {
        return i / 4;
    } else if (p == 4) {
        return i / 12;
    }

    return i;
}

/* Final funciones de anualidad */

/* Inicio Interés compuesto */

/* Final Interés compuesto */

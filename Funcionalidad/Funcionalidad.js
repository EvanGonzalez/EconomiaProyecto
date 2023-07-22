/* En este archivo se unirán todas las funcionalidades */
/* POR FAVOR NO TOCAR */


/* Comienzo funciones de anualidad */
function calcularMontoAnualidad(n,i,R){
    if(n<=0||i<=0||R<=0){
        return "Error, los datos no pueden ser menores a 1"
    }else{
        let S=R*(((1+i)**n-1)/i);
        return S.toFixed(2);
    }
    
}

function calcularValorPresenteAnualidad(n,i,R){
    if(n<=0||i<=0||R<=0){
        return "Error, los datos no pueden ser menores a 1"
    }else{
        let A=R*((1-(1+i)**(-n))/i)
        return A.toFixed(2);
    }
}

function imprimirA(){
    /* Obteniedo los valores del Front-end */
    let capital = parseFloat(document.getElementById("montoC1").value);
    let tiempo = parseFloat(document.getElementById("tiempo").value);
    let periodo = parseInt(document.getElementById("periodo").value);
    let interes = parseFloat(document.getElementById("interesC1").value);
    /* 0 = seleccionar un periodo */
    if(periodo!=0){
        /* Se busca cuanto equivale tiempo según el periodo */
        let n=calcularN(tiempo,periodo);
        /* Se busca cuanto equivale el interes segun el periodo */
        let i=calcularI(interes/100,periodo);
        /* Ya que tenemos todos los valores definidos ejecutamos la función que realiza los cálculos */
        let A= calcularValorPresenteAnualidad(n,i,capital);
        /* p = parrafo en el Front */
        let p=document.getElementById("resultA");
        /* Se imprime el valor de A en el párrafo del front-end */
        p.innerHTML = A;
    }else{
        alert("*** Debe seleccionar un periodo ***");
    }
   
}
function calcularN(t,p){
    /* 2 = Semestralmente */
    if(p==2){
        return t*2

        /* 3 = Trimestralmente */
    }else if(p==3){
        return t*4;

        /* Mensualmente */
    }else if(p==4){
        return t*12;
    }

    /* Anualmente */
    return t;
}
function calcularI(i,p){
    /* Lo mismo pasa acá */
    if(p==2){
        return i/2
    }else if(p==3){
        return i/4;
    }else if(p==4){
        return i/12;
    }

    return i;
}

/* Final funciones de anualidad */
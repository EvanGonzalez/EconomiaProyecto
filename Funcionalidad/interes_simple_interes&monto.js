/*Funcionalidad */
function calcularInteressimple1(S,C){
    if(S<=0||C<=0){
        return "Error, los datos no pueden ser menores a 1"
    }else{
        if(C>=S){
            return "Error, el capital debe ser menor que el monto"
        }
        let I=S-C;
        return I.toFixed(2);
    }
    
}

function calcularInteressimple2(i,t,C){
    if(i<=0||t<=0||C<=0){
        return "Error, los datos no pueden ser menores a 1"
    }else{
        let I=C*(i/100)*(t);
        return I.toFixed(2);
    }
    
}

function calcularMontosimple1(i,t,C){
    if(i<=0||t<=0||C<=0){
        return "Error, los datos no pueden ser menores a 1"
    }else{
        let S=C*(1+(i/100)*(t));
        return S.toFixed(2);
    }
    
}

function calcularMontosimple2(I,C){
    if(I<=0||C<=0){
        return "Error, los datos no pueden ser menores a 1"
    }else{
        let S=C+I;
        return S.toFixed(2);
    }
    
}
function imprimirIs1(){
 /* Obteniedo los valores del Front-end */
 let S = parseFloat(document.getElementById("montois1").value);
 let C = parseFloat(document.getElementById("capitalis1").value);
 let I= calcularInteressimple1(S,C)
 let p=document.getElementById("resultIis1");
        /* Se imprime el valor de A en el párrafo del front-end */
        p.innerHTML = I;
}
function imprimirIs2(){
    /* Obteniedo los valores del Front-end */
    let C = parseFloat(document.getElementById("capitalis2").value);
    let i = parseFloat(document.getElementById("tinteresis2").value);
    let t = parseFloat(document.getElementById("tiempois2").value);
    let p=document.getElementById("resultIis2");
    let elementoActivo = document.querySelector('input[name="tipotiempo"]:checked').value;
    if(elementoActivo == "Anos"){
        let I=calcularInteressimple2(i,t,C)
        p.innerHTML = I;
    }else{
        let I=calcularInteressimple2(i,t/12,C)
        p.innerHTML = I;
        
    }
   }
   function imprimirMs1(){
    /* Obteniedo los valores del Front-end 
    
    Aqui terminé
    */
    let C = parseFloat(document.getElementById("capitalmis1").value);
    let i = parseFloat(document.getElementById("tiempomis1").value);
    let t = parseFloat(document.getElementById("tinteresmis1").value);
    let p=document.getElementById("resultMis1");
    let elementoActivo = document.querySelector('input[name="tipotiempo"]:checked').value;
    let S
    if(elementoActivo == "Anos"){
        S=calcularMontosimple1(i,t,C);
        p.innerHTML = S;
    }else{
        S=calcularMontosimple1(i,t/12,C);
        p.innerHTML = S;
    
        
    
    }
   }
   function imprimirMs2(){
    /* Obteniedo los valores del Front-end */
    let I = parseFloat(document.getElementById("interesmis2").value);
    let C = parseFloat(document.getElementById("capitalmis2").value);
    let S= calcularMontosimple2(I,C)
    let p=document.getElementById("resultMis2");
           /* Se imprime el valor de A en el párrafo del front-end */
           p.innerHTML = S;
   }

/*Cierre de calculos de interes simple interes&monto */
function calcularInteresExacto() {
    let C = parseFloat(document.getElementById("Capital101").value);
    let t = parseFloat(document.getElementById("Tiempo101").value);
    let i = parseFloat(document.getElementById("Tasa101").value);
    if(t<=0||i<=0||C<=0){
        document.getElementById("resultado").innerHTML ="Error, los datos no pueden ser menores a 1"
    }else{
        let Ie = C*(i/100)*(t/365);
        document.getElementById("resultado").innerHTML = "El interes simple exacto es: " + Ie.toFixed(2);
    }
}

function calcularInteresOrdinario() {
    let C = parseFloat(document.getElementById("Capital102").value);
    let t = parseFloat(document.getElementById("Tiempo102").value);
    let i = parseFloat(document.getElementById("Tasa102").value);
    if(t<=0||i<=0||C<=0){
        document.getElementById("resultado1").innerHTML ="Error, los datos no pueden ser menores a 1"
    }else{
        let Io = C*(i/100)*(t/360);
        document.getElementById("resultado1").innerHTML += "El interes simple ordinario es: " + Io.toFixed(2);
    }
}

function tiempoExacto() {
    // Convertir las fechas a objetos Date
    const fechaInicioObj = new Date(document.getElementById("Fechainicial").value);
    const fechaFinObj = new Date(document.getElementById("FechaFinal").value);

    // Calcular la diferencia en milisegundos entre las dos fechas
    const diferenciaEnMilisegundos = fechaFinObj - fechaInicioObj;
    // Convertir la diferencia en días redondeando al valor entero más cercano
    const unDia = 1000 * 60 * 60 * 24; // Milisegundos en un día
    const diferenciaEnDias = Math.round(diferenciaEnMilisegundos / unDia);
    let anios = Math.floor(diferenciaEnDias / 365);

    // Obtener los meses de diferencia
    let meses = diferenciaEnDias / 30;
    document.getElementById("resultado5").innerHTML = "El tiempo exacto equivale a: <br>Dias:" + diferenciaEnDias + "";
    if(diferenciaEnDias>=30){
        document.getElementById("resultado5").innerHTML += "Meses: "+meses;
        if(meses>=12){
            document.getElementById("resultado5").innerHTML += "Años:"+anios+"";
        }
    }
    
}
function tiempoAproximado() {
    // Convertir las fechas a objetos Date
    const fI = document.getElementById("Fechainicial2").value;
    const fF = document.getElementById("FechaFinal2").value;
    const fechaInicioObj = fI.toString();
    const fechaFinObj = fF.toString();
    //son subcadenas para los dias y meses.
    let di=parseInt(fechaInicioObj.substring(8,10));
    let df=parseInt(fechaFinObj.substring(8,10));
    let mi=parseInt(fechaInicioObj.substring(5,7));
    let mf=parseInt(fechaFinObj.substring(5,7));
    let t;
    if(dias<0){
         t=(Math.abs((df-di))-(Math.abs((mf-mi))*30));
    }else{
         t=(Math.abs((df-di))+(Math.abs((mf-mi))*30));
    }
    
    document.getElementById("resultado77").innerHTML = "El tiempo aproximado equivale a: <br>Dias:" + Math.abs(t) + "<br>";
}


function showInput(inputId) {
    var input = document.getElementById(inputId);
    var buttons = document.getElementsByClassName('button');

    if (input.style.display === "none") {
        input.style.display = "block";
        disableOtherButtons(inputId, buttons);
    } else {
        input.style.display = "none";
        enableAllButtons(buttons);
    }
}

function disableOtherButtons(selectedInputId, buttons) {
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      if (button.id !== "button" + selectedInputId.slice(5)) {
        button.disabled = true;
        button.classList.add('inactive'); // Agrega la clase 'inactive' para cambiar el color
      }
    }
  }
  
  function enableAllButtons(buttons) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
      buttons[i].classList.remove('inactive'); // Quita la clase 'inactive' para restaurar el color original
    }
  }

//   limpiar inputs 
function limpiarInputs() {
    // Limpiar los campos de entrada
    var inputs = document.querySelectorAll('input.imput');
    inputs.forEach(input => {
        input.value = '';
    });

    // Limpiar el resultado mostrado
    var resultado = document.getElementById('resultcalCapital1');
    var resultado = document.getElementById('resultIis1');
    var resultado = document.getElementById('resultMis2');
    var resultado = document.getElementById('anos');
    var resultado = document.getElementById('meses');
    var resultado = document.getElementById('resultMis1');
    var resultado = document.getElementById('resultcalCapital2');
    var resultado = document.getElementById('resultIis2');
    var resultado = document.getElementById('resultcalTiempo');
    var resultado = document.getElementById('resultado5');
    var resultado = document.getElementById('resultado');
    var resultado = document.getElementById('resultado1');
    resultado.textContent = '';
}

// fin de limpiar inputs



//variables captadas para el resultado.
const resultCapital1 = document.querySelector("#resultcalCapital1");
const resultCapital2 = document.querySelector("#resultcalCapital2");
const resultCapital3 = document.querySelector("#resultcalCapital3");
const resultTiempo = document.querySelector("#resultcalTiempo");



function calCapital1() {
    //variable monto
    let monto = document.getElementById('montoC1').value;
    //variable interes
    let interes = document.getElementById('interesC1').value;

    //Calculo del capital 1
    let capital1 = (monto - interes);

    //alerta para confirmar datos
    var resConfirmacion = confirm("¿Deseas enviar esta información?");

    if (resConfirmacion == true) {

        //si acepta entonces valida que no sean negativos, ni estén vacíos
        if (monto > 0 && interes > 0 && monto != null && interes != null) {
            //retorna resultado
            return resultCapital1.innerHTML = "El resultado es:  C = " + monto + ' - ' + interes + ' = ' + capital1.toFixed(2);
        } else {
            //return resultCapital1.innerHTML = "Error. Hay datos negativos o campos vacíos.";
            //alerta de error
            var resAlert = window.alert("Error. Hay datos negativos o campos vacíos.");
            return resultCapital1.innerHTML = "";
        }
    } else {
        return false;
    }
}

function calCapital2() {
    //varibale interes
    let interes = document.getElementById('interesC2').value;
    //variable tasa de interes
    let tasa = document.getElementById('tasainteresC2').value;
    var tasainteres = tasa / 100;
    //variable tiempo
    let tiempo = document.getElementById('tiempoC2').value;

    //capta el valor los radio
    let elementoActivo = document.querySelector('input[name="tipotiempo"]:checked').value;

    //alerta de confirmacion de datos
    var resConfirmacion = confirm("¿Deseas enviar esta información?");

    if (resConfirmacion == true) {

        //si acepta entonces valida que no sean negativos, ni estén vacíos
        if (tasainteres > 0 && interes > 0 && tiempo > 0 && tasainteres != null && interes != null && tiempo != null) {

            //si la tasa de interes es anual y el tiempo es en años ó si la tasa es mensual y el tiempo es en meses
            if (elementoActivo == "Anos") {

                //calculo del capital
                let capital2 = interes / (tasainteres * tiempo);

                //retorna resultado
                return resultCapital2.innerHTML = "El resultado es:  C = " + interes + " / " + tasainteres + " * " + tiempo + " = " + capital2.toFixed(2);

            } else {
                //sino si la tasa es anual y el tiempo es en meses, se divide el tiempo entre 12
                if (elementoActivo == "Meses") {

                    //calculo del capital
                    let capital2 = interes / (tasainteres * (tiempo / 12));

                    //retorna resultado
                    return resultCapital2.innerHTML = "El resultado es:  C = " + interes + " / ( " + tasainteres + " * " + tiempo + " / 12 ) " + " = " + capital2.toFixed(2);

                } else {
                    //si no se selecciona nada en los radio
                    if (elementoActivo == "") {
                        //alerta de error
                        var resAlert = window.alert("Error. No selecciono una opción.");
                        return resultCapital2.innerHTML = "";
                    }
                }
            }
        } else {
            //return resultCapital1.innerHTML = "Error. Hay datos negativos o campos vacíos.";
            //alerta de erro si hay negativos o campos vacios.
            var resAlert = window.alert("Error. Hay datos negativos o campos vacíos.");
            return resultCapital2.innerHTML = "";
        }

    } else {
        //retorna falso si no acepta enviar los datos.
        return false;
    }
}

function calCapital3() {
    //variable 1
    let monto = document.getElementById('montoC3').value;
    //variable 2
    let tasa = document.getElementById('tasainteresC3').value;
    //convierte a decimal la tasa
    var tasainteres = tasa / 100;
    //variable 3
    let tiempo = document.getElementById('tiempoC3').value;

    //calculo de capital 3
    let capital3 = monto / (1 + (tasainteres * tiempo));


    //alerta para confirmar datos
    var resConfirmacion = confirm("¿Deseas enviar esta información?");

    if (resConfirmacion == true) {
        //si acepta entonces valida que no sean negativos, ni estén vacíos
        if (tasainteres > 0 && monto > 0 && tiempo > 0 && tasainteres != null && monto != null && tiempo != null) {

            //retorna el resultado
            return resultCapital3.innerHTML = "El resultado es:  C = " + monto + " / (1 + (" + tasainteres + " * " + tiempo + "))" + " = " + capital3.toFixed(2);
        } else {

            //return resultCapital1.innerHTML = "Error. Hay datos negativos o campos vacíos.";
            //Alerta de error
            var resAlert = window.alert("Error. Hay datos negativos o campos vacíos.");
            return resultCapital3.innerHTML = "";
        }
    } else {
        return false;
    }
}

function calTiempo() {
    //variable interes
    let interes = document.getElementById('interesT').value;
    //variable capital
    let capital = document.getElementById('capitalT').value;
    //variable tasa de interes
    let tasa = document.getElementById('tasainteresT').value;
    var tasainteres = tasa / 100;

    //Calculo de tiempo
    let tiem = interes / (capital * tasainteres);
    let tiempo = tiem * 12;

    //alerta para confirmar datos
    var resConfirmacion = confirm("¿Deseas enviar esta información?");

    if (resConfirmacion == true) {

        //si acepta entonces valida que no sean negativos, ni estén vacíos
        if (interes > 0 && capital > 0 && tasainteres > 0 && interes != null && capital != null && tasainteres != null) {
            //retorna el resultado
            return resultTiempo.innerHTML = "El tiempo es:  t = " + interes + " / " + capital + " * " + tasainteres + " = " + tiempo + " meses. ";
        } else {
            //return resultCapital1.innerHTML = "Error. Hay datos negativos o campos vacíos.";
            //Alerta de error
            var resAlert = window.alert("Error. Hay datos negativos o campos vacíos.");
            return resultCapital3.innerHTML = "";
        }
    } else {
        return false;
    }
}
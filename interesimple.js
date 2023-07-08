



function convertToDecimal() {
  var integerInput = document.getElementById('integerInput');
  var decimalInput = document.getElementById('decimalInput');

  var integerValue = parseInt(integerInput.value);
  var decimalValue = integerValue / 100; // Dividir por 100 para convertir en decimal

  decimalInput.value = decimalValue.toFixed(2); // Limitar a 2 decimales
}

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
    }
  }
}

function enableAllButtons(buttons) {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}

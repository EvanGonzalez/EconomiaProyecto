function showInput(inputId) {
    var input = document.getElementById(inputId);
    if (input.style.display === "none") {
      input.style.display = "block";
    } else {
      input.style.display = "none";
    }
  }
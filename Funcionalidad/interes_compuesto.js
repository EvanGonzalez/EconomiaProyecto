function calcularMontoCompuesto1(C, i, n){
  return C * Math.pow(1 + i, n);
}
function calcularMontoCompuesto2(C, I) {
  return C + I;
}

function calcularInteresCompuesto(S, C) {
  return S - C;
}

function calcularCapitalCompuesto(S, i, n) {
  return S / Math.pow(1 + i, n);
}

// Ejemplo de uso
const C = 1000; // Capital inicial
const i = 0.05; // Tasa de interés (5%)
const n = 12;   // Periodo en meses (puede ser cualquier otro valor para diferentes periodos)

// Calcular Monto Compuesto
const montoCompuesto = calcularMontoCompuesto(C, C * i * n);
console.log("Monto compuesto:", montoCompuesto);

// Calcular Interés Compuesto
const interesCompuesto = calcularInteresCompuesto(montoCompuesto, C);
console.log("Interés compuesto:", interesCompuesto);

// Calcular Capital Compuesto
const capitalCompuesto = calcularCapitalCompuesto(montoCompuesto, i, n);
console.log("Capital compuesto:", capitalCompuesto);

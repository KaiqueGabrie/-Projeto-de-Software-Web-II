

let contaTotal = 101.53;

let parte = contaTotal / 3;
let carlos = Math.floor(parte);  // sem centavos
let andre = Math.floor(parte);   // sem centavos
let felipe = contaTotal - (carlos + andre);

console.log("Total da conta: R$", contaTotal.toFixed(2));
console.log("Carlos paga: R$", carlos.toFixed(2));
console.log("André paga: R$", andre.toFixed(2));
console.log("Felipe paga: R$", felipe.toFixed(2));

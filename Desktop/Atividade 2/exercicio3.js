
let salarioInicial = 2000;
let salarioComAumento = salarioInicial * 1.2; // +20%
let descontoINSS = salarioComAumento * 0.08;  // 8%
let salarioFinal = salarioComAumento - descontoINSS;

console.log("Salário inicial:", salarioInicial.toFixed(2));
console.log("Salário com aumento:", salarioComAumento.toFixed(2));
console.log("Desconto INSS:", descontoINSS.toFixed(2));
console.log("Salário final:", salarioFinal.toFixed(2));

const calculo1 = require('./modulos/moduloAula14');
const calculo2 = require('./modulos/moduloAula14');
const calculo3 = require('./modulos/moduloAula14');
const calculo4 = require('./modulos/moduloAula14');
const maiuscula = require('./modulos/moduloAula14');
const mais = require('./modulos/moduloAula14');

console.log("============ Realizando Operações Matemáticas ===============");
console.log("Resultado do Cálculo SOMAR = "+calculo1.somar(6,5));
console.log("Resultado do Cálculo SUBTRAIR = "+calculo2.subtrair(8,2));
console.log("Resultado do Cálculo MULTIPLICAR = "+calculo3.multiplicar(10,5));
console.log("Resultado do Cálculo DIVIDIR = "+calculo4.dividir(30,5));

console.log(" ");
console.log("=============== Convertendo palavras e frases ============");
console.log("Resultado do nome em Maiúscula = "+maiuscula.maiuscula('silvia'));
console.log("Resultado do letras em Maiúscula = "+mais.maiuscula('abcdefgh'));

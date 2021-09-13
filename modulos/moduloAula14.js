//fazer parecido com este exemplo: 
// console.log("Resultado do Cálculo SOMAR = "+calculo.soma(2,3)); 
// enunciado calculo2.subtrair(20,3); 
// calcular calculo3.multiplicar(20,3); 
// calcular calculo4.dividir(20,3); 
// calcular maiuscula.maiuscula('silvia'); 
// converter em letra maiúcula mais.maiuscula('aaa'); 
// converter em letra maiúcula 

somar = (a,b) => a + b;
subtrair = (a,b) => a - b;
multiplicar = (a,b) => a * b;
dividir = (a,b) => a / b;
maiuscula =  (a) => a.toUpperCase();

module.exports = {somar, subtrair, multiplicar, dividir, maiuscula};
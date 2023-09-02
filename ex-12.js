// Desenvolva um algoritmo que transforma um decimal em número 
// Input: d = 25
// Output: 11001


const prompt = require('prompt-sync')()

const decimal = parseInt(prompt("Digite um número decimal:"));

let binary = "";

if (decimal === 0) {
  binary = "0";
} else {
  let value = decimal;

  while (value > 0) {
    const binarySum = value % 2;
    binary = binarySum + binary;
    value = Math.floor(value / 2);
  }
}

console.log(binary)


// resposta Yan

console.log(Number(25).toString(2))

var decimal = Number(prompt('Digite o numero'))
var bin = ''

for (var i = 0; decimal > 0; i++) {
  var rest = decimal % 2
  decimal = parseInt(decimal / 2)
  bin = decimal + rest
}
console.log(bin)
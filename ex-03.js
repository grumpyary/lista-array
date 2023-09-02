const prompt = require("prompt-sync")()

var array = []

var numberOne = Number(prompt('Digite o primeiro número.'))
var numberTwo = Number(prompt('Digite o segundo número.'))
var numberThree = Number(prompt('Digite o terceiro número.'))

array[0] = numberOne
array[1] = numberTwo
array[2] = numberThree

console.log(`O array é: ${array}`) ;

array[0] = numberThree;
array[2] = numberOne;

console.log(`O array invertido é ${array}`)


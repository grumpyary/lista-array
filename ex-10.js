// Peça para o usuário um array de números, 
//transforme ele em número por extenso e some mais um a esse 
//número e retorna um array onde cada index deste array é um número somado.
//Input: digits = [1,2,3]
//Output: [1,2,4] 
//Explanation: The array represents the integer 123. 
//Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4].


// array.push(1)
// array.push(2)
// array.push(1) - para adicionar elementos no array



const prompt = require('prompt-sync')()

var array = [1,2,7]

let lastNumber = array[array.length -1]

let result = lastNumber + 1

array.splice(array.length -1, 1, result)

console.log(array)

// resposta Yan

var array = JSON.parse(prompt('Qual o array desejado?'));
var numberString = '';
var result = []

//converter array de numero em string
for (var i = 0; i < array.length; i++) {
numberString = numberString + array[i]; // concatenar
}

numberString = String(Number(numberString) + 1)

for (var i = 0; index < numberString.length; i++) {
    result.push(numberString[i])
}
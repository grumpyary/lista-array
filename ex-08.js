// Peça para o usuário um array de números e retorne todos os números positivos.

const prompt = require('prompt-sync')()

var arrayNumbers = JSON.parse(prompt('digite o array'))

var plusNumbers = []

for(var index = 0 ; index < arrayNumbers.length ; index++) 
if (arrayNumbers > 0) 
    plusNumbers.push([arrayNumbers])


console.log(`Números positivos: ${plusNumbers}`)


//resposta Yan

var array = JSON.parse(prompt('Digite o array'));

for (var index = 0 ; index < array.length; index++) {
    if (array[index] > 0) {
        console.log(array[index]);
    }
}
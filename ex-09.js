// Peça para o usuário um array de string e retornar a maior string de um array.

const prompt = require('prompt-sync')()

var arrayString = []

let arrayElements = 0

while(arrayElements !== "*") {
    arrayElements = String(prompt("Digite o array de string, um por um: "))

    arrayString.push(arrayElements)
}

var longestWord = ""

for(var i = 0; i < arrayString.length; i++) {
    if(arrayString[i].length > longestWord.length) {
        longestWord = arrayString[i]
    }
}
console.log(`${longestWord}`)

// respota Yan

var array = JSON.parse(prompt('Qual o array')) ;

var maxLength = ""

for (var index = 0; i < array.length; i++) {
    if (array[index].lenght > maxLength.length) {
        maxLength = array[i];
    }
}
console.log(maxLength)
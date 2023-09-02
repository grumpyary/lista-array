const prompt = require('prompt-sync')()

const array = JSON.parse(prompt( ' Digite o array separado por vírgula. ' ))

var sum = 0

for(var index = 0; index < array.length; index++){
sum = sum + array[index]
}
var average = sum / array.length

console.log(`A média dos números é: ${average}`)

// resposta Yan
var array = JSON.parse(prompt('Digite o array.'));

var count = 0

for (var index = 0; index < array.length; index++) {
    count = count + array[index];
}

console.log(`A media e: ${count / array.length}`)
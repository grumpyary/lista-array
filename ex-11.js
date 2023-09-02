// Desenvolva um algoritmo que transforma um binário 
// em decimal.
// Input: b = "11001" => [1, 1, 0, 0, 1]
// Output: 25

const prompt = require('prompt-sync')()

var binaryNumber = JSON.parse(prompt(' Type the binary number as an array. '))

var sum = 0

for (var i = 0 ; i < binaryNumber.length; i++) {
    sum = sum * 2 + Number(binaryNumber[i])
}

console.log(`${sum}`)


// resposta Yan

var bin = prompt('Digite o numero')
var expoent = 0
var count = 0

for (var i = bin.length - 1; i => 0; i--) {
    var base2 = (2**expoent) * Number(bin[i])
    count = count + base2
    exponent++
}
console.log(count)

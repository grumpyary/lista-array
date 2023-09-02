// Desenvolver um algoritmo que pergunte para usuário 
//um valor N e partir disso deve ser montada uma lista de Fibonacci.


const prompt = require('prompt-sync')()

var n = Number(prompt('Type the desired number.')); //5

var n1 = 0
var n2 = n + 1

var fibonacci = []

fibonacci.push(n1);
fibonacci.push(n2);

for (var i = 2 ; i < n; i++ ) {
    const nextNumber = n1 + n2;
    fibonacci.push(nextNumber);
    n1 = n2;
    n2 = nextNumber
}

console.log(fibonacci)
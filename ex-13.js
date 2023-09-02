// Peça para o usuário um array de números e um target, 
// deve ser retornados qual dos índices somados dá target.
// Array: [1, 3, 5]
// target: 4
// Retorno: [0, 1]

const prompt = require('prompt-sync')()

var array = JSON.parse(prompt('Type the numbers array.'));

var target = Number(prompt('Type the target number'));

var elementSum = []

for (var i = 0 ; i < array.length; i++ ) {
    for (var a = i + 1; a < array.length; a++) {
        if (array[i] + array[a] === target)
    {
        elementSum.push(i, a);
    }
}
}

if (elementSum.length > 0) {
    console.log(elementSum)
} else {
    console.log(` No match for target number. `)
}
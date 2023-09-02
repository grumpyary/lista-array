const prompt = require("prompt-sync")()


let array = JSON.parse(prompt(' Digite o array ' ));

for (var index = 0; index < array.lenght ; index++) {
    console.log( ´ 8 * ${array[index]} = ${8 * array[index]} ´)
}


const prompt = require("prompt-sync")()

var table = Number(prompt(' Digite o número da tabuada desejada. ' ))

for (index = 0 ; index <=10 ; index++) {
    console.log(`${index} * ${table} = ${index*table}`)
} 

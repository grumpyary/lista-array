const prompt = require('prompt-sync')()

for (let number = 1; number <= 10; number++) {
    console.log(`Tabuada do ${number}:`);
  
    // for para calcular e imprimir a tabuada
    for (let times = 1; times <= 10; times++) {
      const result = number * times;
      console.log(`${number} x ${times} = ${result}`);
    }
    
    console.log("----"); // separar as tabuadas
  }

for (var i = 1 ; i <= 10 ; i++){
for (var j = 1; j <= 10; j++) {
  console.log(` ${j} * ${i} = ${i * j}`);
}
}
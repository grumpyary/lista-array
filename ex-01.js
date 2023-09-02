// for (var index = 0; index < array.lenght; index=++) {
//    console.log(array[index])
//}
// array[array.lenght] = "whatever"
// array.push



const prompt = require('prompt-sync')()

let array = JSON.parse(prompt(' Digite o array ' ));

if (array[0] < array[1]) {
    console.log([array[0], array [1]]) ; 
}
else {
    console.log([array[1] , array[0]])
}
    







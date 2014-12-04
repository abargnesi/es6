function* numbers() {
    let i = 0;
    while(true) {
        yield i;
        i += 1;
    }
}

var array = [];
for (let num of numbers()) {
    if (num == 1000)
        break;
    console.log(num);
    array.push(num);
}

// doesn't work
//var generatorExpression = [for (n of array) n];
//for (let num in generatorExpression) {
//    console.log("expression: ", num);
//}
//var numbers = [1,2,3,4,5];
//var arrayComprehension = [for (x of numbers) x];
//console.log(arrayComprehension);
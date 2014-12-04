let array = [1,2,3,4,5];

console.log(
    array.
        filter(num => num % 2 == 0).
        map(num => num * num).
        every(num => num % 4 == 0)
);
function add(num1, num2){
    const arr = [...arguments];
    let sum = 0;
    const doMath = arr.map(value => sum += value);
    return sum;
}

const result = add(2, 3, 6, 4, 5, 3);
console.log(result);
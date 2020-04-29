const arr = [2, 3, 4, 5, 6, 7, 8];
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     const result = element * element;
//     newArr.push(result)
// }

// console.log(newArr)

// const square = element => element * element;
// console.log(square(2))

// const result = arr.map(function(element){
//     return element * element;
// })


// const result = arr.map(value => value * value);
// console.log(result)


const bigger = arr.filter(x => x > 5);

const isThere = arr.find(x => x > 5);
console.log(isThere)
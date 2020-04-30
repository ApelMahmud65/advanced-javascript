const nums = [2, 3, 4, 5, 6, 7, 8, 9];
// const part = nums.slice(3, 5);
const remove = nums.splice(2, 5, 55, 66);
// console.log(remove);
// console.log(nums)
// console.log(part)


const together = nums.join(', ');
console.log(together)
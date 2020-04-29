const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Deepjol'}
]

// const nameArry = [];
// for(let i = 0; i<student.length; i++){
//     const element = student[i];
//     const name = element.name;
//     nameArry.push(name);
// }

// console.log(nameArry);

// const name = student.map(element => element.name)
// const ids = student.map(id => id.id);
// console.log(ids);
// console.log(name);

const bigger = student.filter(s => s.id> 31);
const searchStudent = student.find(s => s.id > 41)
console.log(searchStudent);
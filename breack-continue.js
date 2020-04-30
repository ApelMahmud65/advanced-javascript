const arr = [1, 2, 3, 5, 6, -8, -4, -2, 8, 9, 4];

// for (let i = 0; i < arr.length; i++) {

//     if(arr[i] > 5){
//         break;
//     }
//     console.log(arr[i])
// }



for (let i = 0; i < arr.length; i++) {

    if(arr[i] < 0){
        continue;                //continue means skip
    }
    console.log(arr[i])
}


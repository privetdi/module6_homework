

function getEvenCheck(arr){

let even = 0;
let notEven = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0 && arr[i] !== null && arr[i] !== undefined && arr[i] !== NaN){
        even += 1;
    } else if(arr[i] !== null && arr[i] !== undefined && arr[i] !== NaN) {
        notEven += 1;
    } else{
        console.log(++i + " = данные элементы масива являются null/undefined/NaN")
    }
}

    console.log(even + " количество четных чисел");
    
    console.log(notEven + " количество не четных чисел");
}
let arrEven = [null,2,3,2,5,8,9,9, NaN, undefined]
getEvenCheck(arrEven);
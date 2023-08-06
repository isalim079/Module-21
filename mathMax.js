let jim = 69;
let dela = 97;
let chinku = 99;
console.log(Math.max(jim, dela, chinku));

// Practice Task (find Max Number) -------------------------------------

function findMax(x, y, z) {
    let maxNumber = Math.max(x, y, z);
    console.log(maxNumber);
    return maxNumber;
}
findMax(32, 43, 12);

// Practice Task (find Min number) -------------------------------------

function findMin(a, b, c) {
    let minNumber = Math.min(a, b, c);
    console.log(minNumber);
    return minNumber;
}
findMin(23, 12, 16);

// using if else (find max) ------------------------------------

let num1 = 12;
let num2 = 24;
let num3 = 19;
if(num1 > num2 && num1 > num3) {
    console.log("This number is big or max: ", num1);
}
else if(num2 > num1 && num2 > num3) {
    console.log("This number is big or max: ", num2);
}
else{
    console.log("This number is big or max: ", num3);


}
// using if else (find min) ------------------------------------

let numb1 = 32;
let numb2 = 24;
let numb3 = 19;
if(numb1 < numb2 && numb1 < num3) {
    console.log("This number is small or min: ", numb1);
}
else if(numb2 < numb1 && numb2 < numb3) {
    console.log("This number is small or min: ", numb2);
}
else{
    console.log("This number is small or min: ", numb3);
}

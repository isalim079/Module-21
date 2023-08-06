let first = 5;
let second = 9;
console.log(first, second);
let temp = first;
first = second;
second = temp;
console.log(first, second);

// Another Method (By destructuring) ------------------------------

let first1 = 8;
let second1 = 13;
console.log(first1, second1);
[first1, second1] = [second1, first1];
console.log(first1, second1);
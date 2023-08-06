let result = Math.pow(2, 3);   //pow() mane hocche power. (2, 3) mane hocche 2 er upor 3. orthat 2 to the power 3. orthat 2 cube.
console.log(result);

let age1 = 25;
let age2 = 30;
const gap1 = (age1 - age2);   //eikhane minus maan ashbe. 
console.log(gap1);
const gap2 = Math.abs(age1 - age2);    //Math.abs() use korar jonno ekhane minus maan ashbe na.
console.log(gap2);

if( gap2 <= 5) {
  console.log("You can be friends");
}
else{
  console.log("You can't be friends");
}
// maan gulo thik rakhte evabe ejonno amader Math.abs() use kora hoy.


let fractionNumber = 3.69747;
console.log(Math.round(fractionNumber));    // doshomic number ke round korar jonno Math.round() bebohar kora hoy. 0.5 er upor hole baray dibe number. niche hole komay dibe.

let fractionNumber1 = 2.001;
console.log(Math.ceil(fractionNumber1));    //Math.ceil() diye point er por jai thakuk na keno, number increase kore dibe.

let fractionNumber2 = 7.98668;
console.log(Math.floor(fractionNumber2));   //doshomik er porer sob baad jabe. jai thakuk na keno. just 7 hobe. 


console.log(Math.random());  //randomly 0 & 1 er majher number print korbe prottekbar.

console.log(Math.random()*100);    //0 theke 100 er majher doshomik sob randomly print hobe.

console.log(Math.round(Math.random()*6));      //0 theke 6 er majher sob round number print hobe randomly. like ludo games 🫨 


//for loop er majheo amra code chalaite pari. dekhi 1st 20 ta random ludo chokka falaile kon kon number ashe.


for(let i = 0; i < 20; i++){
  console.log(Math.round(Math.random()*6));
}         //mela gula kana ashce 🤣
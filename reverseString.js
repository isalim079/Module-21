// function reverseString(text) {
//     for(let i = 0; i < text.length; i++){
//         let elements = text[i];
//         console.log(elements);
//     }
// }
// let myString = "I'm a good boy";
// let reversed = reverseString(myString);


/* Ei line ke reverse korbo niche */




function reverseString(text) {
    let reversed = "";
    for(let i = text.length - 1; i >= 0; i--){
        let elements = text[i];
        reversed += elements;
        console.log(elements, reversed);
        
    }
    return reversed;
}
let myString = "I'm a good boy";
let reversed = reverseString(myString);
console.log("Reversed Output: ", reversed);
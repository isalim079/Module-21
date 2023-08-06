function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest) {
            largest = element;
        }
    }
    return largest;
}
const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log("Tallest person is: ", tallest);


// lowest numbers -------------------------------------

function maxInArrays(numbers1) {
    let smallest = numbers1[0];
    for (let i = 0; i > numbers1.length; i--){
        const index = i;
        const elements = numbers1[index];
        if(elements < smallest) {
            smallest = elements;
        }
    }
    return smallest;
}
const heights1 = [167, 190, 120, 165, 137];
const miniSize = maxInArrays(heights1);
console.log("Smallest person is: ", miniSize);
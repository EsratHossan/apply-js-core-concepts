// console.log(4/2);
// console.log(98/2);
// console.log(144/2);
// console.log(1286/2);

// console.log(7%2);
// console.log(83%2);
// console.log(145%2);
// console.log(1287%2);

function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumbersEven = isEven(303);
console.log(myNumbersEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);

// const  myInch = 12;
// const myFeet = myInch / 12;
// console.log(myFeet);

// const dataInches = 144;
// const dataFeet = dataInches / 12;
// console.log('data feet', dataInches);

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;
// console.log('dadiFeet', dadiFeet);


function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = nanaInches / 12;
console.log('nana feet', nanaFeet);

//code 1
const myName = () => {
return "Jason";
}
console.log(myName())

//code 2
const myFunction = (a, b) => a * b;
myFunction(32, 384)
console.log(myFunction(32, 384))

//code 3

function myFunc(theObject) {
    theObject.make = "Mazda";
}

const mycar = {
    make: "Mazda",
    model: "3",
    year: "2020",
};

const x = mycar.make;
myFunc(mycar);
const y = mycar.make;
console.log(mycar)


//code 4
const logTwoNumbers = (x, y) => {
return (x+y)
}
let sum = logTwoNumbers (5, 10);
let sum2 = logTwoNumbers (10, 15);
let sum3 = logTwoNumbers (32, 763);
console.log(sum3)


//code 5
const logCurrentMood = (mood) => {
    console.log(mood)
}
logCurrentMood("Tired")

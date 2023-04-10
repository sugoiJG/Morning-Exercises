// logTwoNumbers - this will log the sum of 2 numbers.
// call this function 3 times.
function sum(a, b) {
    return a * b;
} 
sum(a = 2, b = 4)
sum(a = 3, b = 8)
sum(a = 5, b = 9)
// logCurrentMood - this will log how you are feeling this morning
// call this function 2 times
const logCurrentMood = (mood) => {
    console.log(`Current mood: ${mood}`)
}
logCurrentMood('tired');
logCurrentMood('overwhelmed');

// logSleepDeficit - this will log 8 minus how much you slept that night
// call this function 5 times
const logSleepDeficit = (number) => {
const sleepDeficit = 8 - number;
console.log(`Sleep Deficit: ${sleepDeficit} hours`)
}

logSleepDeficit(5);
logSleepDeficit(6);
logSleepDeficit(8);
logSleepDeficit(8);
logSleepDeficit(8);

// loopTenTimes - this will do a for loop that loops 10 times
// call this function 2 times
function loopTenTimes() {
for (let i = 0; i < 10; i++) {
    console.log(i)
    } 
} 
loopTenTimes();
loopTenTimes();


// loopTwentyTimes - this will do a while loop that loops 20 times
// call 1 time
function loopTwentyTimes() {
for (let j = 0; j < 20; j++) {
    console.log(j)
}
}
loopTwentyTimes();

// (OPTIONAL) getPointTotal - this will take a points (array) parameter and log OR return (only do one) the sum of the points in the array
function getPointTotal(points) {
    let total = 0
    for (let i = 0; i < points.length; i++) {
        total += points[i];
    }
    return total;
}
const points = [3, 6, 8, 2, 5];
const total = getPointTotal(points);
console.log(`Total points: ${total}`);


// (OPTIONAL) filterLowPoints - this will take a points (array) parameter and take out any points in the array that are less than 10

// (SUPER OPTIONAL) getShipsAndLog - this function will use 'fetch' to request data from the Star Wars APILinks to an external site. loop through and log the names of the ships

//Variables
let numCall

//Basic F&B or M&P...for loop w/ nested if, variable throws up to 100...evaluates with % to find 3 and 5
//multiples to then log them based on our criteria...blah blah blah
for (numCall = 0; numCall <= 100; numCall++) {
    if (numCall === 0) {
        console.log(0)
    } else if (numCall % 3 === 0 && numCall % 5 === 0) {
        console.log('FizzBuzz')
    } else if (numCall % 3 === 0) {
        console.log('Fizz')
    } else if (numCall % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(numCall)
    }
}
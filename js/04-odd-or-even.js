//Variable declaration
let num

//Create loop up to 15 and label numbers even or Odd
for (num = 0; num <= 15; num++) {
     if (num % 2 === 0) {
        console.log(`${num} is Even`)
    } else {
        console.log(`${num} is Odd`)
    }
}
console.log('This is the end of the sequence.')
//Create coin and counter variable
let coinFlip
let numFlips = 0

//Flip he coin until it lands on tails
do {
    coinFlip = Math.round(Math.random())
    numFlips++ //Increment the number of flips in counter
    if (coinFlip === 0) {
        console.log('Heads')
    }
} while (coinFlip === 0);
console.log('Game Over! it\'s Tails.')
console.log(`It took ${numFlips} flips to land on tails.`)
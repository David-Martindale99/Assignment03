//Create coin 
let coinFlip

//create a user prompted loop for number of coin flip executions
let numFlips = parseInt(prompt('Enter number of times you want to flip the coin.'))

//Create loop to iterate based on user input
for (let i = 0; i < numFlips; i++) { 
    
    //Generate random num between 0 and 1
    coinFlip = Math.round(Math.random())

    //Check the result of flip and Conosole.log it
    if (coinFlip === 0) {
        console.log("Heads")
    } else {
        console.log("Tails")
    }
}
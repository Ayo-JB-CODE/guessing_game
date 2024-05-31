const userInput = document.getElementById('userInput');
const displayScreen = document.getElementById('display-screen');
const checkButton = document.getElementById('check-btn');

const secreteNum = Math.floor(Math.random() * 100) + 1;
let countDown = 1;
// Check The Console for The Exposure of The Secret Number
console.log(secreteNum);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const uI = userInput.value;

    if(countDown == 2 && uI !== secreteNum ){
        alert(`HEY! THIS IS YOUR ${countDown}ND ATTEMPT! YOU HAVE ONLY ONE MORE CHANCE!!!`)
    }
    if(countDown == 3){
        userInput.disabled = true;
        checkButton.disabled = true;
        displayScreen.value="GAME OVER!!! ||| REFRESH PAGE"
    }
    if (uI > secreteNum && countDown !== 3) {
        displayScreen.value= "Too high! Enter a new guess";
        countDown++;
    }
    if (uI < secreteNum && countDown !== 3) {
        displayScreen.value="Too low! Enter a new guess";
        countDown++;
    }
    if(uI === ""){
        displayScreen.value="You have not enter any value!";
        countDown=-1
    }
    if (uI == secreteNum) {
        userInput.disabled = true;
        checkButton.disabled = true;
        displayScreen.value= "CONGRATS!!! YOU GOT IT";
        // If you want to know how many guess(s) it takes you to get it, check the console
        console.log(`It took you ${countDown-1} guess(s) to get it`)
    }
});



// let userGuess = prompt("Enter your first guess! (Type 'q' to quit)").toLocaleLowerCase();

// while (parseInt(userGuess) !== secreteNum) {
//     if (userGuess === 'q'){
//         alert("OK, YOU QUIT!")
//         break;
//     } else if (countDown > 3){
//         alert("OOPS!!! YOU LOSE!!!")
//         break;
//     }
//     userGuess = parseInt(userGuess);
//     if (countDown == 3){
//         alert("YOU ONLY HAVE ONE MORE ATTEMPT!!!")
//     }
//     if (userGuess > secreteNum) {
//         userGuess = prompt("Too high! Enter a new guess:");
//         countDown++;
//     } else if (userGuess < secreteNum) {
//         userGuess = prompt("Too low! Enter a new guess:");
//         countDown++;
//     } else if(userGuess === ""){
//         userGuess = prompt("You have not entered any value! Enter a new guess:");
//     }else {
//         userGuess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//     }
// }
    
// alert("CONGRATS YOU WIN!")
// alert(`You guessed ${countDown} times`)

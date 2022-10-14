const btn = document.getElementById('play-btn');

var counter = 0;       //counter for randomly generated numbers

// generate random numbers in a loop for two seconds
btn.onclick = function numLoop() {
    
    setTimeout(function() {
        num = getRandomNumber();
        counter++;
        if (counter <= 20) {
            numLoop();
        }
        else {
            checkWin(num);
        }
    }, 100)
}

// generate and display numbers
function getRandomNumber() {
    var num = Math.random()*(99999 + 1);
    num = Math.round(num);
    document.getElementById('lottery-num').innerHTML = num;
}

// check if the final generated value is a winner (any number between 1 and 1000 is a winner) and displays message to the user
function checkWin(num) {
    if (num <= 1000 && num >= 1) {
        alert("Congratulations! You've won!");
    }
    else {
        alert("Too bad! You've lost!");
    }

    counter = 0;    // reset the counter for subsequent clicks
    document.getElementById('lottery-num').innerHTML = 0;   // reset the displayed value to 0
}
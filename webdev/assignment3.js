var dice = ['dice-1.png','dice-2.png','dice-3.png','dice-4.png','dice-5.png','dice-6.png'];
var numDice = parseInt(Math.random() * dice.length);
var value;
var diceStr = document.getElementById('dice');
var bank = 50;
var bankStr = document.getElementById('bank');
var resultStr = document.getElementById('result');
var buttonStr = document.getElementById('button');

function checkDice() {
    if(numDice == 0) {
        diceStr.innerHTML = '<img src="images/dice-1.png" />';
        value = 1;
    }
    else if(numDice == 1) {
        diceStr.innerHTML = '<img src="images/dice-2.png" />';
        value = 2;
    }
    else if(numDice == 2) {
        diceStr.innerHTML = '<img src="images/dice-3.png" />';
        value = 3;
    }
    else if(numDice == 3) {
        diceStr.innerHTML = '<img src="images/dice-4.png" />';
        value = 4;
    }
    else if(numDice == 4) {
        diceStr.innerHTML = '<img src="images/dice-5.png" />';
        value = 5;
    }
    else if(numDice == 5) {
        diceStr.innerHTML = '<img src="images/dice-6.png" />';
        value = 6;
    }
}
function restart() {
    numDice = parseInt(Math.random() * dice.length);  
    diceStr.innerHTML = '<img src="images/dice-unknown.png" />';
    buttonStr.innerHTML = '<button onclick="checkEven()">EVEN</button><button onclick="checkOdd()">ODD</button>';
}

function checkEven () {
    checkDice();
    if(bank > 0) {
        if(value % 2 == 0) {
            bank = bank + 10;
            bankStr.innerHTML = 'Your bank:$' + bank;
            resultStr.innerHTML = 'You chose EVEN - you WIN!';
        }
        else {
            bank = bank - 10;
            bankStr.innerHTML = 'Your bank:$' + bank;
            resultStr.innerHTML = 'You chose EVEN - you LOSE!';
        
        }
        buttonStr.innerHTML = '<button onclick="restart()">PLAY AGAIN</button>';
    }   
    else {
        resultStr.innerHTML = "GAME OVER";
        diceStr.innerHTML = '<img src="images/dice-unknown.png" />';
    }
}

function checkOdd() {
    checkDice();
    if(bank > 0) {
        if(value % 2 != 0) {
            bank += 10;
            bankStr.innerHTML = 'Your bank:$' + bank;
            resultStr.innerHTML = 'You chose ODD - you WIN!';
        }
        else {
            bank -= 10;
            bankStr.innerHTML = 'Your bank:$' + bank;
            resultStr.innerHTML = 'You chose ODD - you LOSE!';
    
        } 
        buttonStr.innerHTML = '<button onclick="restart()">PLAY AGAIN</button>';
    } 
    else {
        resultStr.innerHTML = "GAME OVER";
        diceStr.innerHTML = '<img src="images/dice-unknown.png" />';
    }
}
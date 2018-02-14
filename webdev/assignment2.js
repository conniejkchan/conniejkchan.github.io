var currentTime = new Date();
var hour = currentTime.getHours();
var minutes = currentTime.getMinutes();
var timeStr = document.querySelector('p');
var timeOfDay;
var colors = ['red','green','blue','orange','pink','yellow'];
var balls = ['ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png', 'ball_6.png', 'ball_7.png', 'ball_8.png', 'ball_9.png'];

//time of day greetings
if(hour >= 0 && hour <= 5) {
    timeOfDay = "am - Good Night!";
}
else if(hour >= 6 && hour <= 11) {
    timeOfDay = "am - Good Morning!";
}
else if(hour >= 12 && hour <= 17) {
    timeOfDay = "pm - Good Afternoon!";
}
else if(hour >= 18 && hour <=23) {
    timeOfDay = "pm - Good Evening!";
}
//adjust hour and minute output
if(hour > 12 ) {
    hour = hour - 12; // 1:00 pm - 12 AM
}
if(minutes < 10) {
    minutes = "0" + minutes;
}
timeStr.innerHTML = "The time is currently " + hour + ":" + minutes + timeOfDay;

var numColors = parseInt(Math.random() * colors.length);

var colorBox = document.getElementById('color');
var colorText = document.querySelector('h3');

if(numColors == 0) {
    colorText.innerHTML = "Today's lucky color is red";
    colorBox.style['background-color'] = 'red';
}
else if(numColors == 1){
    colorText.innerHTML = "Today's lucky color is green";
    colorBox.style['background-color'] = 'green';
}
else if(numColors == 2){
    colorText.innerHTML = "Today's lucky color is blue";
    colorBox.style['background-color'] = 'blue';
}
else if(numColors == 3){
    colorText.innerHTML = "Today's lucky color is orange";
    colorBox.style['background-color'] = 'orange';
}
else if(numColors == 4){
    colorText.innerHTML = "Today's lucky color is pink";
    colorBox.style['background-color'] = 'pink';
}
else if(numColors == 5){
    colorText.innerHTML = "Today's lucky color is yellow";
    colorBox.style['background-color'] = 'yellow';
}

var numBalls = parseInt(Math.random() * balls.length);
var ballsImg = document.getElementById('balls');
for(var i = 0; i < 3; i++) {
    while(balls[numBalls] === undefined) {
        numBalls = parseInt(Math.random() * balls.length);
    }
    if(numBalls == 0) {
        ballsImg.innerHTML += '<img src="images/ball_1.png" />';
    }
    else if(numBalls == 1) {
        ballsImg.innerHTML += '<img src="images/ball_2.png" />';
    }
    else if(numBalls == 2) {
        ballsImg.innerHTML += '<img src="images/ball_3.png" />';
    }
    else if(numBalls == 3) {
        ballsImg.innerHTML += '<img src="images/ball_4.png" />';
    }
    else if(numBalls == 4) {
        ballsImg.innerHTML += '<img src="images/ball_5.png" />';
    }
    else if(numBalls == 5) {
        ballsImg.innerHTML += '<img src="images/ball_6.png" />';
    }
    else if(numBalls == 6) {
        ballsImg.innerHTML += '<img src="images/ball_7.png" />';
    }
    else if(numBalls == 7) {
        ballsImg.innerHTML += '<img src="images/ball_8.png" />';
    }
    else if(numBalls == 8) {
        ballsImg.innerHTML += '<img src="images/ball_9.png" />';
    }
    delete balls[numBalls];
    numBalls = parseInt(Math.random() * balls.length); 
}
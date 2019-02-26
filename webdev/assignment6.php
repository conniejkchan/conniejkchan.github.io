<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Assignment 6</title>
    
    <style type="text/css">
    @import url('https://fonts.googleapis.com/css?family=Quicksand');
    body {
        background-color: rgb(228,170,193);
        font-family: 'Quicksand', sans-serif;
    }

    h1 {
        text-align: center;
        font-family: 'Quicksand', sans-serif;
    }
    .content {
        background-color: rgb(167,195,228);
        border: 3px solid black;
        border-radius: 15px;
        width:400px;
        height:400px;
        margin-left: 500px;
        font-family: 'Quicksand', sans-serif;
        font-size: 20px;
    }

    .question {
        margin: 50px;
    }

    #resultpage {
        font-family: 'Quicksand', sans-serif;
        font-size: 30px;
        margin-top: 50px;
        margin-left: 555px;
    }

    #submit {
        margin-left: 50px;
    }

    #error {
        font-size: 30px;
        color:red;
        margin-left: 555px;

    }

    #try, #str {
        margin-left: 70px;
    }
    </style>
</head>
<body>
    <h1>Which BT21 Character Are You?</h1>
    
    <?php
        //look for incomplete error flag
        if($_GET['error'] === 'incomplete') {
            print '<p id="error">Incomplete form!!!</p>';
        }
    ?>
    <div id="contentQuiz" class="content">
    <?php
        //uses $_COOKIE superglobal
        if($_COOKIE['bt21']) {
            print '<p id="str">You are '.$_COOKIE['bt21'].'!!</p>';
            print '<img src="images/' . $_COOKIE['bt21'] . '.png">';
            print '<br>';
            print '<a id="try" href="tryagain.php">Try Again</a>';
        }
        else {
            print '<form method="POST" action="processdata.php">
            <div class="question">
            What is your favorite fruit? <br>
                <select name ="fruit">
                    <option value="">Select a Fruit</option>
                    <option value="apple">Apple</option>
                    <option value="strawberry">Strawberry</option>
                    <option value="orange">Orange</option>
                    <option value="mango">Mango</option>
                </select>  <br>
            </div>
            <div class="question">
            What is your favorite color? <br>
                <select name ="color">
                    <option value="">Select a Color</option>
                    <option value="red">Red</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                </select>  <br>
            </div>
            <div class="question">
            What is your favorite animal?  <br>  
                <select name ="animal">
                    <option value="">Select an Animal</option>
                    <option value="bunny">Bunny</option>
                    <option value="tiger">Tiger</option>
                    <option value="chick">Chick</option>
                    <option value="koala">Koala</option>
                </select>  <br>
            </div>
                <input id="submit" type="submit" value="Which BT21 Character am I?">
            </form>';
        }
    ?>                
    </div>
  
    <div id="resultpage">
        <a href="results.php">See Results</a>
    </div>

</body>
</html>
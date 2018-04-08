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
        background-color: /*rgb(167,195,228);*/
        font-family: 'Quicksand', sans-serif;
    }
    h1 {
        text-align: center;

    }

    #container {
        border: 3px solid black;
        border-radius: 15px;
        width:400px;
        height:400px;
        margin-left: 500px;
    }
    
    </style>
</head>
<body>
<h1>Which BTS Member Are You?</h1>
    <div id="container">
        <div id="fruit">What is your favorite fruit?
        <form method="POST" action="result.php">
            <select name ="select" class="select">
                <option value="question">Select a Fruit</option>
                <option value="apple">Apple</option>
                <option value="strawberry">Strawberry</option>
                <option value="orange">Orange</option>
                <option value="mango">Mango</option>
                <option value="watermelon">Watermelon</option>
            </select>  <br>
            <input type="submit" value="submit"><br>

              <select name ="select" class="select">
                <option value="question">How many items to purchase?</option>
                <option value="apple">Apple</option>
                <option value="strawberry">Strawberry</option>
                <option value="orange">Orange</option>
                <option value="mango">Mango</option>
                <option value="watermelon">Watermelon</option>
            </select>  <br>
            <input type="submit" value="submit">

              <select name ="select" class="select">
                <option value="question">How many items to purchase?</option>
                <option value="apple">Apple</option>
                <option value="strawberry">Strawberry</option>
                <option value="orange">Orange</option>
                <option value="mango">Mango</option>
                <option value="watermelon">Watermelon</option>
            </select>  <br>
            <input type="submit" value="submit">
    </form>

        </div>

    </div>


    

    <script type="text/javascript" src="assignment6.js"></script>
</body>
</html>
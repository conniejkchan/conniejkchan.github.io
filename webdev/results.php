<?php
// open the file
//path file path changes depending on where the code is
$file_path = '/Users/conniechan/Github/conniejkchan.github.io/webdev/data';
$data = file_get_contents($file_path.'/results.txt');

//count the results
//explode data to array lines
$lines = explode("\n", $data);
$cooky = 0;
$tata = 0;
$chimmy = 0;
$koya = 0;

//try sizeof($lines) - 1 for the sizing
//count how many bt21 char in results.txt to create bar graph
for($i = 0; $i < sizeof($lines); $i++) {
    if($lines[$i] === 'cooky') {
        $cooky++;
    }
    else if($lines[$i] === 'tata') {
        $tata++;
    }
    else if($lines[$i] === 'chimmy') {
        $chimmy++;
    }
    else if($lines[$i] === 'koya') {
        $koya++;
    }
}
//sizeof($lines) is num of quiz submissions
$cookwidth = $cooky / sizeof($lines) * 100; // 2/7
$tatawidth =$tata / sizeof($lines) * 100;
$chimwidth =$chimmy / sizeof($lines) * 100;
$koyawidth =$koya / sizeof($lines) * 100;
//change the bar widths of some bars of the page

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Results</title>
    <style type="text/css">
    @import url('https://fonts.googleapis.com/css?family=Quicksand');
    body {
        /*background-color: rgb(228,170,193);*/
        font-family: 'Quicksand', sans-serif;
    }
    #koya {
        height: 60px;
        background-color: rgb(167,195,228);
        border: 1px solid black;
    }

    #tata { 
        height: 60px;
        background-color: rgb(230, 153, 255);
        border: 1px solid black;
    }

    #chimmy {
        height: 60px;
        background-color: pink;
        border: 1px solid black;
    }

    #cooky {
        height: 60px;
        background-color: rgb(255, 102, 102);
        border: 1px solid black;
    }

    .hidden {
        display: none;
    }

    #quiz {
        font-family: 'Quicksand', sans-serif;
        font-size: 20px;
        margin-top: 50px;
        margin-left: 555px;
    }

    </style>

</head>
<body>
    <h1>BT21 Character Quiz Results</h1>
    <div id="cooky" style="width: <?php print $cookwidth; ?>%;">
        COOKY <?php print $cookwidth; ?>%
    </div>
    <div id="tata" style="width: <?php print $tatawidth; ?>%;">
        TATA <?php print $tatawidth; ?>%
    </div>
    <div id="chimmy" style="width: <?php print $chimwidth; ?>%;">
        CHIMMY <?php print $chimwidth; ?>%
    </div>
    <div id="koya" style="width: <?php print $koyawidth; ?>%;">
        KOYA <?php print $koyawidth; ?>%
    </div>
    <div id="quiz">
        <a href="assignment6.php">Back to Quiz</a>
    </div>
    
</body>
</html>
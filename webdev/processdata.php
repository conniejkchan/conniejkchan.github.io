<?php

    //access the form
    $fruit = $_POST['fruit'];
    $color = $_POST['color'];
    $animal = $_POST['animal'];

    //make sure they filled the form out
    if($fruit === "" || $color === "" || $animal === "") {
        //incomplete form values
        //error=incomplete is get request
        header("Location: assignment6.php?error=incomplete");
    }
    //if they filled it out, figure out which BT21 character they are
    else {
        $cooky = 0;
        $tata = 0;
        $chimmy = 0;
        $koya = 0;

        if($fruit === "apple") {
            $cooky++;
        }
        else if($fruit === "strawberry") {
            $tata++;
        }
        else if($fruit === "orange") {
            $chimmy++;
        }
        else if($fruit === "mango") {
            $koya++;
        }

        if($color === "red") {
            $cooky++;
        }
        else if($color === "purple") {
            $tata++;
        }
        else if($color === "pink") {
            $chimmy++;
        }
        else if($color === "blue") {
            $koya++;
        }

        if($animal === "bunny") {
            $cooky++;
        }
        else if($animal === "tiger") {
            $tata++;
        }
        else if($animal === "chick") {
            $chimmy++;
        }
        else if($animal === "koala") {
            $koya++;
        }

        if($cooky >= $tata && $cooky >= $chimmy && $cooky >= $koya) {
            //largest value is cooky
            $bt21 = "cooky";
        }
        else if($tata >= $cooky && $tata >= $chimmy && $tata >= $koya) {
            $bt21 = "tata";
        }
        else if($chimmy >= $cooky && $chimmy >= $tata && $chimmy >= $koya) {
            $bt21 = "chimmy";
        }
        else if($koya >= $cooky && $koya >= $chimmy && $koya >= $tata) {
            $bt21 = "koya";
        }

        //how to login to i6 server in terminal?
        //change file path on i6 server
        //get file path of data directory
        //cd data -> pwd for file path
        //copy string and edit file_path
        // nano processdata.php on terminal
        //chmod 777 data cd data chmod 777 results.txt
        $file_path = '/Users/conniechan/Github/conniejkchan.github.io/webdev/data';
        //store results in a file so we can access them later
        file_put_contents($file_path.'/results.txt',$bt21."\n", FILE_APPEND);

        setcookie('bt21',$bt21);

        //redirect them back to the main page
        header('Location: assignment6.php');
    }

    //send back some kind of response

    


    //set cookies if they did everything correctly
?>




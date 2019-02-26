<?php 
    setcookie('bt21', '', time()-3600);
    //we often use this function to redirect the user to
    //a different page after performing some server-side actions.
    //The syntax for a PHP redirect is as follows:
    header('Location: assignment6.php');
?>
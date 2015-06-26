<?php
/**
 * Created by PhpStorm.
 * User: silverhugh
 * Date: 15-6-24
 * Time: 上午8:02
 */
session_start();
if (isset($_SESSION["user_name"])){
    if (isset($_SESSION['case_id'])){
        $user_name = $_SESSION['user_name'];
        $case_id = $_SESSION['case_id'];
        $mid_code = $_POST['mid_code'];

        //save mid_code to file
        $json_file = fopen("../user/".$user_name."/case_history/".$case_id.".json","w");
        fwrite($json_file,$mid_code);
        fclose($json_file);

        echo 1;
    }
    else{
        echo "Illegal Operation!";
    }
}
else{
    echo "Login first, please!";
}
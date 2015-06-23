<?php
/**
 * Created by PhpStorm.
 * User: silverhugh
 * Date: 15-6-21
 * Time: 下午4:46
 */
    /*Insert new user to database*/
    $con = mysqli_connect("localhost","root","root");
    if (!$con)
    {
        die('Could not connect: '.mysqli_error($con));
    }
    $name = $_POST['name'];
    $password = md5($_POST['password']);
    $email = $_POST['email'];
    $sql = "INSERT INTO healthcheck.hc_user (name,password,email) VALUES ('$name','$password','$email')";
    mysqli_set_charset($con,"utf-8");
    mysqli_query($con,$sql);

    mysqli_close($con);
    /*Create Folder and File For New User*/
    mkdir($name,0777);
    mkdir($name."/case_history",0777);
    $file = fopen($name."/info.json","w");
    fclose($file);
    echo "1";

<?php
/**
 * Created by PhpStorm.
 * User: silverhugh
 * Date: 15-6-21
 * Time: 下午4:17
 */
    $con = mysqli_connect("localhost","root","root");
    if (!$con)
    {
        die('Could not connect: '.mysqli_error($con));
    }
    $name = $_POST['name'];
    $sql = "SELECT * FROM healthcheck.hc_user WHERE NAME = '$name'";
    mysqli_set_charset($con,"utf-8");
    $result=mysqli_query($con,$sql);
    if(mysqli_num_rows($result)!=0){
        echo 0;
    }
    else
        echo 1;
    mysqli_close($con);
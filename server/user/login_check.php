<?php
/**
 * Created by PhpStorm.
 * User: silverhugh
 * Date: 15-6-22
 * Time: 上午10:23
 */
    $con = mysqli_connect("localhost","root","root");
    if (!$con)
    {
        die('Could not connect: '.mysqli_error($con));
    }
    $name = $_POST['name'];
    $password = md5($_POST['password']);
    $sql = "SELECT * FROM healthcheck.hc_user WHERE NAME = '$name' AND PASSWORD = '$password'";
    mysqli_set_charset($con,"utf-8");
    $result=mysqli_query($con,$sql);
    if(mysqli_num_rows($result)!=0){
        session_start();
        $_SESSION["user_name"] = $name;
        $info_json = file_get_contents($name."/info.json");
        $_SESSION['info_json'] = $info_json;

        echo 1;
    }
    else
        echo "用户名或密码错误";
    mysqli_close($con);
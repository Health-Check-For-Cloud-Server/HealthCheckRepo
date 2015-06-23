<?php
/**
 * Created by PhpStorm.
 * User: Hugh
 * Date: 2015/5/29 0029
 * Time: 9:18
 */

session_start();
if (isset($_SESSION["user_name"])){
    if($mid_code = $_GET['mid_code']) {
        $file_name = "./json_files/".time().".json";
        $json_file = fopen($file_name,"w");
        fwrite($json_file,$mid_code);
        fclose($json_file);

        $case_file = fopen("/server/user/".$name."/case_history/".$case_id."json","w");
        fwrite($case_file,$mid_code);
        fclose($case_file);

        $result = array();
        exec('python ./modules/check.py '.$file_name, $result);
        //unlink($file_name);

        $result_str = "";
        foreach ($result as $x) {
            if ($x != $result[0])
                $result_str .= $x;
        }

        echo $result_str;
    }
}
else
    echo 0;
<?php
/**
 * Created by PhpStorm.
 * User: Hugh
 * Date: 2015/5/29 0029
 * Time: 9:18
 */
    if($mid_code = $_GET['mid_code']) {
        $file_name = "./json_files/".time().".json";
        $json_file = fopen($file_name,"w");
        fwrite($json_file,$mid_code);
        fclose($json_file);

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

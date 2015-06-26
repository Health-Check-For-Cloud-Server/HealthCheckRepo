<?php
/**
 * Created by PhpStorm.
 * User: silverhugh
 * Date: 15-6-22
 * Time: 下午3:00
 */
session_start();
if (isset($_SESSION["user_name"])){
    date_default_timezone_set('PRC');
    $name = $_SESSION["user_name"];
    $case_name = $_POST["case_name"];
    $case_id = date("YmdHis");

    $run_check_history = array();
    $case = array('case_id' => $case_id, 'case_name' => $case_name, 'run_check_history' => $run_check_history);

    $info = json_decode($_SESSION['info_json'],true);
    $case_list = &$info['case_list'];
    if($case_list != null){
        array_push($case_list,$case);
    }
    else{
        $case_list = array();
        array_push($case_list,$case);
        $info = array('case_list' => $case_list);
    }
    //create file to storage content of new case
    $file = fopen($name."/case_history/".$case_id.".json","w");
    fclose($file);

    //modify SESSION info_json
    $_SESSION['info_json'] = json_encode($info);

    //modify info.json
    $file_info = fopen($name."/info.json","w");
    fwrite($file_info, $_SESSION['info_json']);
    fclose($file_info);

    echo $case_id;
}
else
    echo "Login first, please!";
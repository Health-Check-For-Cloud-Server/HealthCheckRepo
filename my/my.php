<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="icon" href="/image/logo(50-50).png" />
    <link rel="stylesheet" href="/lib/jquery_ui/jquery-ui.css" />
    <link rel="stylesheet" href="/css/share_content.css"/>
    <link rel="stylesheet" href="/css/my_page.css"/>
    <script type="text/javascript" src="/lib/jquery/jquery.js" ></script>
    <script type="text/javascript" src="/lib/jquery_ui/jquery-ui.js" ></script>
    <script type="text/javascript" src="/js/share_content.js" ></script>
    <script type="text/javascript" src="/js/my_page.js" ></script>
</head>
<body>
    <script>
        add_header();
    </script>
    <div id="tabs">
        <div id="selects">
            <ul>
                <li><a href="#my_health_check"><span>My HealthCheck</span></a></li>
                <li><a href="#check_history"><span>Check History</span></a></li>
                <li><a href="#profile"><span>Profile</span></a></li>
                <li><a href="#setting"><span>Setting</span></a></li>
            </ul>
        </div>
        <div id="my_health_check" class="fragment">
            <h1>我的 HealthCheck</h1>
            <div id="new_health_check" class="ui-icon ui-icon-plus" title="创建新的HealthCheck项目"></div>
            <ul>
                <?php
                session_start();
                if(isset($_SESSION["user_name"])){
                    $name = $_SESSION["user_name"];
                    $info_json = $_SESSION['info_json'];

                    $info = json_decode($info_json, true);
                    $case_list = $info['case_list'];
                    if ($case_list != null){
                        foreach ($case_list as &$case){
                            $case_id = $case['case_id'];
                            ?>
                            <li onclick="javascript:window.location='healthcheck.php?case_id=<?php echo $case_id; ?>'"><?php echo $case['case_name']; ?></li>
                        <?php
                        }
                    }
                    else{
                        echo "未创建任何HealthCheck项目，创建一个～";
                    }


                    //$list = $info->$case_list;

                }
                else
                {
                    ?>
                    <script>
                        $(function () {
                            alert("Login first, please!");
                            window.location.href="/login.html";
                        });
                    </script>
                <?php
                }

                ?>
            </ul>
        </div>
        <div id="check_history" class="fragment">
        </div>
        <div id="profile" class="fragment">

        </div>
        <div id="setting" class="fragment">

        </div>
    </div>
</body>
</html>
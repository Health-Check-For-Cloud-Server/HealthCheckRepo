<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="icon" href="/image/logo(50-50).png" />
    <link rel="stylesheet" href="/lib/jquery_ui/jquery-ui.css" />
    <link rel="stylesheet" href="/css/share_content.css"/>
    <link rel="stylesheet" href="/css/health_check.css"/>
    <link rel="stylesheet" href="/css/widgets.css"/>
    <script type="text/javascript" src="/lib/jquery/jquery.js" ></script>
    <script type="text/javascript" src="/lib/jquery/jquery.cookie.js" ></script>
    <script type="text/javascript" src="/lib/jquery_ui/jquery-ui.js" ></script>
    <script type="text/javascript" src="/js/share_content.js" ></script>
    <script type="text/javascript" src="/js/create_widgets.js" ></script>
    <script type="text/javascript" src="/js/health_check.js" ></script>
</head>
<body>
    <script>
        add_header();
    </script>
    <div>
        <?php
        session_start();
        if(isset($_SESSION["user_name"])){
            $user_name = $_SESSION['user_name'];
            if(isset($_GET["case_id"])){
                $case_id = $_GET["case_id"];
                $_SESSION['case_id'] = $case_id;
                $info_json = $_SESSION['info_json'];

                $info = json_decode($info_json,true);
                $case_list = $info['case_list'];
                $case_name = null;
                foreach($case_list as &$case){
                    if ($case['case_id'] == $case_id){
                        $case_name = $case['case_name'];
                        echo "<h1 id='case_title'>$case_name</h1>";
                        break;
                    }
                }
                if ($case_name == null){
                    ?>
                    <script>
                        $(function () {
                            alert("Invalid case_id!");
                            window.location.href = "my.php";
                        });
                    </script>
                <?php
                }
                else{
                    $path = "../server/user/".$user_name."/case_history/".$case_id.".json";
                    if (file_exists($path)){
                        $file_json = file_get_contents($path);
                        echo "<script>
                            $(function(){
                                $('#wrap_health_check').load_check_units('$file_json');
                            });</script>";
                    }
                    else{
                        $file = fopen($path,"w");
                        fclose($file);

                        echo "<script>
                            $(function(){
                                $('#wrap_health_check').load_check_units('');
                            });</script>";
                    }
                }
        }
        else
        {
        ?>
            <script>
                $(function () {
                    alert("Choose a case, please!");
                    window.location.href = "my.php";
                });
            </script>
        <?php
        }
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
    </div>
    <div id="wrap_health_check">

    </div>
    <div id="health_check_tool">
        <ul>
            <li id="new_unit">New Unit</li>
            <li id="save_button">Save</li>
            <li id="check_health">Run Check</li>
        </ul>
    </div>
</body>
</html>
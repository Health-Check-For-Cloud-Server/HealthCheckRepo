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
    <script type="text/javascript" src="/lib/jquery_ui/jquery-ui.js" ></script>
    <script type="text/javascript" src="/js/share_content.js" ></script>
    <script type="text/javascript" src="/js/create_widgets.js" ></script>
    <script type="text/javascript" src="/js/health_check.js" ></script>
</head>
<body>
    <script>
        add_header();
    </script>
    <div id="wrap_health_check">
        <div>
            <?php
            session_start();
            if(isset($_SESSION["user_name"])){
                if(isset($_GET["case_name"]))
                    echo$_GET["case_name"];
            }
            else
            {
            ?>
                <script>
                    $(function () {
                        alert("Login first, please!");
                    });
                </script>
            <?php
            }
            ?>
        </div>
        <div id="health_check_tool">
            <ul>
                <li id="new_unit">New Unit</li>
                <li>Save</li>
                <li id="check_health">Run Check</li>
            </ul>
        </div>
    </div>
</body>
</html>
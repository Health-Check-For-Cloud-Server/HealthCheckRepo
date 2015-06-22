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
                <li><a href="/my/healthcheck.html">Check Java</a></li>
                <li><a href="/my/healthcheck.html">Check Git</a></li>
                <li><a href="/my/healthcheck.html">Check G++</a></li>
                <li><a href="/my/healthcheck.html">Check Vim</a></li>
                <li><a href="/my/healthcheck.html">Check Python</a></li>
                <li><a href="/my/healthcheck.html">Check Apache</a></li>
                <li><a href="/my/healthcheck.html">Check MySQL</a></li>
                <li><a href="/my/healthcheck.html">Check PHP</a></li>
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
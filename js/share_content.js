/**
 * Created by Hugh on 2015/4/3 0003.
 */
function add_header(){
    var str_header = "<header>"+
        "<div id='nav_header'>"+
        "<h1><a href='/'>HealthCheck</a></h1>"+
        "<div id='header_right'>"+
        "<ul>"+
        "<li class='vertical_border'></li>"+
        "<li><a href='/login.html'>登陆</a></li>"+
        "<li class='vertical_border'></li>"+
        "<li><a href='/signup.html'>注册</a></li>"+
        "<li class='vertical_border'></li>"+
        "</ul>"+
        "</div>"+
        "</div>"+
        "</header>";
    document.write(str_header);
}


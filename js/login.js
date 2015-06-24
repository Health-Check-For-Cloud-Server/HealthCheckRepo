/**
 * Created by silverhugh on 15-6-22.
 */
$(function () {
    $("#login_button").click(function () {
        login_check();
    });
});

function login_check(){
    var name = $("#name").val();
    var password = $("#password").val();
    $.ajax({
        url: "/server/user/login_check.php",
        data: "name="+name+"&password="+password,
        dataType: "text",
        type: "post",
        error: register_fail,
        success: function (info) {
            if (info == "1")
                window.location.href = "/my/my.php";
            else
                alert(info);
        }

    });
}

function register_fail(){
    alert("提交信息失败");
}
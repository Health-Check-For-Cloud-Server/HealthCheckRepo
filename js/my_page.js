/**
 * Created by Hugh on 2015/4/7 0007.
 */
$(function(){
    $( "#tabs" ).tabs({
        heightStyle: "fill"
    });
    $(document).tooltip();
    $("#new_health_check").click(function () {
        create_new_case();
    });
});

function create_new_case(){
    var case_name = prompt("Give a Name to new HealthCheck Case:");
    if (case_name!=null && case_name!="") {
        $.ajax({
            url: "/server/user/create_new_case.php",
            type: "post",
            error: submit_fail,
            data: "case_name="+case_name,
            success: function(case_id){
                if(case_id.length == 14){       //eg:20150626222800
                    alert(case_name+" was created successfully!");
                    window.location.href = "/my/healthcheck.php?case_id="+case_id;
                }
                else
                {
                    alert("Create failed!");
                }
            }
        });
    }
    else{
        alert("The name can't be empty!");
    }
}
function submit_fail(){
    alert("信息提交失败");
}

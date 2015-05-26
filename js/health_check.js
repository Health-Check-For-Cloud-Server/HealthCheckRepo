/**
 * Created by Hugh on 2015/4/22 0022.
 */
$(function () {
    $("#wrap_health_check").add_check_unit();
    $("#new_unit").click(function () {
        $("#wrap_health_check").add_check_unit();
    });
    $("#check_health").click(function () {
        alert(generate_middle_code());
    });
});


function HealthCheckObject() {
    this.healthcheck = new Array();
    this.push_check_unit = function (check_unit) {
        this.healthcheck.push(check_unit);
    }
}

function CheckUnit(test,run,run_true,run_false) {
    this.test = test;
    this.run = run;
    this.run_true = run_true;
    this.run_false = run_false;
    this.check_message = new Array();
    this.push_check = function (check_message) {
        this.check_message.push(check_message);
    }
}

function CheckMessage(check_code,check_true,check_false) {
    this.check_code = check_code;
    this.check_true = check_true;
    this.check_false = check_false;
}

function generate_middle_code() {
    var health_check = new HealthCheckObject();

    //遍历所有的check_unit
    $(document).find(".check_unit").each(
        function() {
            var test = $(this).find(".input_test").first().val();
            var run,run_true,run_false;
            $(this).find(".run_unit").first().each(function () {
                run = $(this).find(".input_run").first().val();

                var str1 = ".true_area > .input_dispose ";
                var str2 = ".false_area > .input_dispose ";
                run_true = $(this).find(str1).first().val();
                run_false = $(this).find(str2).first().val();
            });

            var check_unit = new CheckUnit(test,run,run_true,run_false);

            //遍历一个check_unit中的所有check_message
            $(this).find(".check").each(function () {
                var check_code = $(this).find(".input_check").first().val();

                var str1 = ".true_area > .input_dispose ";
                var str2 = ".false_area > .input_dispose ";
                var check_true = $(this).find(str1).first().val();
                var check_false = $(this).find(str2).first().val();

                var check = new CheckMessage(check_code,check_true,check_false);

                check_unit.push_check(check);
            });

            health_check.push_check_unit(check_unit);
        }

    );

    return JSON.stringify(health_check);
}

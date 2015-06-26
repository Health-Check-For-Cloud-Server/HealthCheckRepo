/**
 * Created by Hugh on 2015/4/14 0014.
 * 该文件用于定义healthcheck页面控件生成
 */

/*
 *   暂时这么定义常量
 * */
var INPUT = function () {}
INPUT.TEST = 1;
INPUT.RUN = 2;
INPUT.CHECK = 3;
INPUT.DISPOSE = 4;

var LABEL = function () {}
LABEL.UNIT = 1;
LABEL.RUN = 2;
LABEL.JUDGEMENT = 3;

var DEL = function () {}
DEL.UNIT = 1;
DEL.CHECK = 2;

/*
 *   以下方法均是在当前层中append一个模块
 * */
var check_unit_count = 0;

$.fn.add_an_empty_check_unit = function () {
    var check_unit = $("<div class='check_unit'></div>");

    $(check_unit).add_label(++check_unit_count + "",LABEL.UNIT);
    $(check_unit).add_del(DEL.UNIT);
    $(check_unit).add_test();
    $(check_unit).add_run_unit();
    $(check_unit).add_check();
    $(check_unit).add_more_check().click(function () {
        $(check_unit).add_check();
    });

    $(this).append(check_unit);
    return check_unit;
}
$.fn.add_check_unit = function (info_check_unit) {
    var check_unit = $("<div class='check_unit'></div>");
    $(check_unit).add_label(++check_unit_count + "",LABEL.UNIT);
    $(check_unit).add_del(DEL.UNIT);
    $(check_unit).add_test(info_check_unit['test']);
    $(check_unit).add_run_unit(info_check_unit['run'],info_check_unit['run_true'],info_check_unit['run_false']);

    var check_message = info_check_unit['check_message'];
    for (var x in check_message){
        var check = check_message[x];
        $(check_unit).add_check(check['check_code'],check['check_true'],check['check_false']);
    }

    $(check_unit).add_more_check().click(function () {
        $(check_unit).add_check();
    });

    $(this).append(check_unit);

    return check_unit;
}



$.fn.load_check_units = function (case_json) {
    if(case_json != ""){
        var _case = JSON.parse(case_json);
        if(_case.length != 0){
            var healthcheck = _case['healthcheck'];
            if(healthcheck != null){
                for (var x in healthcheck){
                    $(this).add_check_unit(healthcheck[x]);
                }
                return;
            }
        }
    }
    $(this).add_an_empty_check_unit();
}

$.fn.add_test = function () {
    var test = $("<div class='test'></div>");

    if(arguments.length == 1){
        $(test).add_code_input(INPUT.TEST,arguments[0]).add_label("Test Run",LABEL.RUN);
    }else{
        $(test).add_code_input(INPUT.TEST).add_label("Test Run",LABEL.RUN);
    }

    $(this).append(test);

    return test;
}

$.fn.add_run_unit = function () {
    var run_unit = $("<div class='run_unit'></div>");

    if (arguments.length == 3){
        $(run_unit).add_code_input(INPUT.RUN,arguments[0]).add_label("Run",LABEL.RUN);
        $(run_unit).add_true_area(arguments[1]);
        $(run_unit).add_false_area(arguments[2]);
    }else{
        $(run_unit).add_code_input(INPUT.RUN).add_label("Run",LABEL.RUN);
        $(run_unit).add_true_area();
        $(run_unit).add_false_area();
    }

    $(this).append(run_unit);

    return run_unit;
}

$.fn.add_check = function () {
    var check = $("<div class='check'></div>");

    check.add_del(DEL.CHECK);
    if (arguments.length == 3){
        $(check).add_code_input(INPUT.CHECK,arguments[0]).add_label("Check",LABEL.RUN);
        $(check).add_true_area(arguments[1]);
        $(check).add_false_area(arguments[2]);
    }else{
        $(check).add_code_input(INPUT.CHECK).add_label("Check",LABEL.RUN);
        $(check).add_true_area();
        $(check).add_false_area();
    }

    $(this).append(check);

    return check;
}

$.fn.add_more_check = function () {
    var more = $("<button class='more_check'>More Check</button>");

    $(this).append(more);

    return more;
}

$.fn.add_true_area = function () {
    var true_area = $("<div class='true_area'></div>");

    if (arguments.length == 1){
        $(true_area).add_code_input(INPUT.DISPOSE,arguments[0]).add_label("True",LABEL.JUDGEMENT);
    }else{
        $(true_area).add_code_input(INPUT.DISPOSE).add_label("True",LABEL.JUDGEMENT);
    }

    $(this).append(true_area);

    return true_area;
}
$.fn.add_false_area = function () {
    var false_area = $("<div class='false_area'></div>");

    if(arguments.length == 1){
        $(false_area).add_code_input(INPUT.DISPOSE,arguments[0]).add_label("False",LABEL.JUDGEMENT);
    }else{
        $(false_area).add_code_input(INPUT.DISPOSE).add_label("False",LABEL.JUDGEMENT);
    }

    $(this).append(false_area);

    return false_area;
}
$.fn.add_code_input = function (INPUTMODE) {
    switch (INPUTMODE){
        case INPUT.TEST:
            var code_input = $("<input type='text' class='input_test' />");
            break;
        case INPUT.RUN:
            var code_input = $("<input type='text' class='input_run' />");
            break;
        case INPUT.CHECK:
            var code_input = $("<input type='text' class='input_check' />");
            break;
        case INPUT.DISPOSE:
            var code_input = $("<input type='text' class='input_dispose' />");
            break;
    }
    if(arguments.length == 2){
        var content = arguments[1];
        $(code_input).attr("value",content);
    }

    $(this).append(code_input);

    return code_input;
}

$.fn.add_label = function (content,LABELMODE) {
    var inner = false;
    switch (LABELMODE) {
        case LABEL.UNIT:
            var label = $("<label class='label_unit'>" + content + "</label>");
            inner = true;
            break;
        case LABEL.RUN:
            var label = $("<label class='label_run'>" + content + "</label>");
            break;
        case LABEL.JUDGEMENT:
            var label = $("<label class='label_judgement'>" + content + "</label>");
            break;
    }
    if (inner)
        $(this).prepend(label);
    else
        $(this).before(label);

    return label;
}

$.fn.add_del = function(DELMODE){
    //switch (DELMODE) {
    //    case DEL.UNIT:
    //        break;
    //    case DEL.CHECK:
    //        break;
    //}
    var del = $("<p class='del'>-</p>");
    $(this).append(del);

    del.click(function () {
        if(DELMODE == DEL.UNIT){
            $(this).parent().nextAll('.check_unit').find('.label_unit').each(function () {
                var new_label_num = parseInt($(this).text()) - 1;
                $(this).text(new_label_num);
            });
            --check_unit_count;
        }
        $(this).parent().remove();
    });
}
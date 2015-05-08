/**
 * Created by Hugh on 2015/4/22 0022.
 */
$(function () {
    $("#wrap_health_check").add_check_unit();
    $("#new_unit").click(function () {
        $("#wrap_health_check").add_check_unit();
    });
});
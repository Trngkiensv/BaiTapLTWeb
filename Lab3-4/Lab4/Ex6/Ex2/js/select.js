$(document).ready(function() {
    $(".input_form").click(function() {
        $(this).find("#select").focus();
        $(this).find("input").focus();
        $(this).find("textarea").focus();
    });
});
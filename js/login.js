$(document).ready(function () {

    //Login falso

    $("#login form").submit(function (e) {
        e.preventDefault();
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
        form_name = localStorage.getItem("form_name");

        if (form_name != null && form_name != "undefined") {
            var span = $("#login h4 span");


            span.html("Bienvenido " + form_name);
            span.css("line-height", "20px");

            span.append("<br><br><br><a href='#' id='logout'>Log Out</a>")
            var logout = $("#logout");
            logout.css("text-decoration", "none")
                .css("border", "1px solid black")
                .css("padding", "10px");
            logout.click(function () {
                localStorage.removeItem("form_name");
                location.reload();
            });


            $("#login form").hide();
        };
        return false;
    });


});
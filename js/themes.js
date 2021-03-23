$(document).ready(function () {

    // Selector de Themes

    var theme = $("#theme");

    check();

    function check() {
        var actual_theme = localStorage.getItem("theme");

        console.log(actual_theme);

        if (actual_theme == "violet") {
            theme.attr("href", "./css/violet.css");
        };
        if (actual_theme == "red") {
            theme.attr("href", "./css/red.css")
        };
        if (actual_theme == "lightblue") {
            theme.attr("href", "./css/lightblue.css")
        };
    }


    $("#toViolet").click(function () {
        localStorage.removeItem("theme");
        localStorage.setItem("theme", "violet");

        check();
    });

    $("#toRed").click(function () {
        localStorage.removeItem("theme");
        localStorage.setItem("theme", "red");

        check();
    });


    $("#toLightblue").click(function () {
        localStorage.removeItem("theme");
        localStorage.setItem("theme", "lightblue");

        check();
    });

})
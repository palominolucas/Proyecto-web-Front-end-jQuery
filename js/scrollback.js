$(document).ready(function () {

        //Scroll back 

        $(".scrollback").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
    
            return false;
        });
})
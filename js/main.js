$(document).ready(function() {
    $(".navbar-toggler-icon").click(function() {
        if ($(".Arrow").css("display") != "none") {
            $(".Arrow").css("display", "none");
        } else {
            $(".Arrow").css("display", "block");
        }
        if ($(".links").css("display") != "none") {
            $(".links").css("display", "none");
        } else {
            $(".links").css("display", "block");
        }


    })


})
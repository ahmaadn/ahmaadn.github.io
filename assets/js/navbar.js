$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $("#nav_blog").toggleClass("in");
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});

window.onscroll = function() {
    $(".navbar").toggleClass(
        "in has-shadow",
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 10
    )
};
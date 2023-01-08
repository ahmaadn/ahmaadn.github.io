$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
});

// https://stackoverflow.com/questions/22541364/sticky-navbar-onscroll
// $(".header-sticky").toggleClass('is-fixed-top',jQuery(window).scrollTop() > 50);
// var num = 0;
// $(window).scroll(function () {
//     $(".navbar").toggleClass('is-fixed-top',$(window).scrollTop() > 0);
//     $("body").toggleClass('has-navbar-fixed-top',$(window).scrollTop() > 0);
// });


// // $(window).bind('scroll', function () {
// //     if ($(window).scrollTop() > num) {
// //         $('.navbar').addClass('is-fixed-top');
// //     } else {
// //         $('.navbar').removeClass('is-fixed-top');
// //     }
// // });
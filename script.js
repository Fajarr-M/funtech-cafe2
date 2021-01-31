$(document).ready(function(){

// Hamburger Menu
$(".closeMenu").click(function(){
    $(".mainMenu").css("top","-100%");
});
$(".openMenu").click(function(){
    $(".mainMenu").css({
        "display" : "flex", "top" : "0"
    });
});
// Paralax

$(window).on("load",function(){
    $(".capt").addClass("captMuncul");
});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $(".text-open").css({
        "transform" : "translate("+ wScroll/25 +"%, 0px)"
    });

    $(".open img").css({
        "transform" : "translate("+ wScroll/-25 +"%, 0px)"
    });


    // Navbar
    if (wScroll > 5){
        $("nav").addClass("bg");
    }
    else{
        $("nav").removeClass("bg");
    }

    if (wScroll < 5){
        $("nav ul li a").addClass("col");
    }
    else{
        $("nav ul li a").removeClass("col");
    }

    // Material
    if (wScroll > $(".container-mat").offset().top - 350 ){
        $(".container-mat").addClass("muncul");
    }

    if (wScroll < $(".container-mat").offset().top - 600 ){
        $(".container-mat").removeClass("muncul");
    }

    //menu

    if (wScroll > $(".container-menu").offset().top - 400 ){
        $(".container-menu").addClass("muncul");
    }

    if (wScroll < $(".container-menu").offset().top - 650 ){
        $(".container-menu").removeClass("muncul");
    }
});






























});

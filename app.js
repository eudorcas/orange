$(function() {
    const $hamburgerBtn = $(".hamburger__menu");
    const $navSection = $(".page__navigation");
    const $navMenu = $(".navigation__menu");
    const $menuElements = $(".menu__element");
    const $body = $("body");
    $hamburgerBtn.on("click", function (){
        $(this).toggleClass("active");
        $navSection.toggleClass("big-menu");
        $navMenu.toggleClass("menu-hamburger");
        $menuElements.toggleClass("hamburger");
        $body.toggleClass("stop-scroll");

    });
});
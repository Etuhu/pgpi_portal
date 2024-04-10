let menuSidebar = document.querySelector(".menu-sidebar");
let menuButtonToggler = menuSidebar.querySelector(".menu-button-toggler");
let menuWrapper = document.querySelector(".menu-wrapper");

let openMenuHandler = function (evt) {
    if (!menuWrapper.classList.contains("open")) {
        menuWrapper.classList.add("open");
        menuSidebar.classList.add("opened");
        document.body.classList.add("fixed");
    } else if (menuWrapper.classList.contains("open")) {
        menuWrapper.classList.remove("open");
        menuSidebar.classList.remove("opened");
        document.body.classList.remove("fixed");
    }
};

menuButtonToggler.addEventListener("click", function (evt) {
    openMenuHandler(evt);
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && !menuWrapper.classList.contains("close")) {
        openMenuHandler(evt);
    }
});

Array.prototype.forEach.call(
    document.querySelectorAll('.scrollable'),
    (el) => new SimpleBar(el, {
        autoHide: false,
    })
);

Array.prototype.forEach.call(
    document.querySelectorAll('.scrollable-side'),
    (el) => new SimpleBar(el, {
        autoHide: true,
    })
);


//Подключение кастомного скролла при ширине экрана больше 991 пикселя
// if ($(window).width() > 991) {
//     (function ($) {
//         $(window).on("load", function () {
//             $(".text-content-scroll").mCustomScrollbar({
//                 theme: 'dark',
//                 scrollInertia: "300",
//                 advanced: {
//                     updateOnContentResize: "true",
//                 },
//             });
//         });
//     })(jQuery);
// };
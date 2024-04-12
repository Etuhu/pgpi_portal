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

// (function ($bs) {
//     $bs.Dropdown.prototype.toggle = function (_orginal) {
//         return function () {
//             document.querySelectorAll('.drd-submenu').forEach(function (e) {
//                 e.classList.remove('drd-submenu');
//             });
//             let drd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
//             for (; drd && drd !== document; drd = drd.parentNode.closest('.dropdown')) {
//                 drd.classList.add('drd-submenu');
//             }
//             return _orginal.call(this);
//         }
//     }($bs.Dropdown.prototype.toggle);

//     document.querySelectorAll('.dropdown').forEach(function (drd) {
//         drd.addEventListener('hide.bs.dropdown', function (e) {
//             if (this.classList.contains('drd-submenu')) {
//                 this.classList.remove('drd-submenu');
//                 e.preventDefault();
//             }
//             e.stopPropagation();
//         });
//     });
// })(bootstrap);


// document.addEventListener("DOMContentLoaded", function () {
	//Выпадающее меню при наведении
	// jQuery(".overlay-menu .dropdown").hover(
		// function () {
        //     console.log(jQuery(this).classList[0]);
		// 	jQuery(this).classList.add("show");
		// 	jQuery(this).find(".dropdown-menu").classList.add("show");
		// 	// jQuery(this).find("> .dropdown-menu").show();
		// 	// jQuery(this).find("> .dropdown-menu").update();
		// },
		// function () {
		// 	jQuery(this).classList.remove("show");
		// 	jQuery(this).find(".dropdown-menu").classList.remove("show");
			// jQuery(this).find("> .dropdown-menu").hide();
			// jQuery(this).find("> .dropdown-menu").update();
// 		}
// 	);
// });

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
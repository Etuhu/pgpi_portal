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

//Поиск и фильтрация на странице Базы знаний
var options = {
    valueNames: [ 'base-item' ],
    // page: 6,
    // pagination: true
};

var baseDocList = new List('base-list', options);

new Swiper(".video-swiper", {
	slidesPerView: 4,
	slidesPerGroup: 1,
	speed: 500,
	simulateTouch: true,
	spaceBetween: 15,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	breakpoints: {
		300: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 3,
		},
		1600: {
			slidesPerView: 3,
		},
		1921: {
			slidesPerView: 4,
		},
	},
});

//Управление видео на странице с видоматериалами
let feedbackVideoWrappers = document.querySelectorAll(".item-video-wrapper");
if (feedbackVideoWrappers.length > 0) {
    feedbackVideoWrappers.forEach(function(feedbackVideoWrapper, index){
        let feedbackVideoButton = feedbackVideoWrapper.querySelector(".item-video-button");
        let feedbackVideo = feedbackVideoWrapper.querySelector("video");
        let feedbackPoster = feedbackVideoWrapper.querySelector(".item-video-poster");
        feedbackVideoButton.addEventListener("click", function () {
            feedbackVideoButton.classList.add("d-none");
            feedbackPoster.classList.add("d-none");
            feedbackVideo.play();
        });
    });
};

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
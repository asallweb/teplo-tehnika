(function () {
	const breakpoint = window.matchMedia("(min-width:992px)");

	let mySwiper;
	let StepsSwiper;

	const breakpointChecker = function () {
		if (breakpoint.matches === true) {
			if (mySwiper !== undefined) mySwiper.destroy(true, true);
			if (StepsSwiper !== undefined) StepsSwiper.destroy(true, true);

			return;
		} else if (breakpoint.matches === false) {
			return enableSwiper();
		}
	};

	const enableSwiper = function () {
		mySwiper = new Swiper(".swiper-container_important", {
			// Optional parameters
			loop: true,

			autoplay: {
				delay: 2500,
			},

			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});

		StepsSwiper = new Swiper(".swiper-container_steps", {
			// Optional parameters
			slidesPerView: "auto",
			loop: true,
			spaceBetween: 15,

			autoplay: {
				delay: 2500,
			},

			pagination: {
				el: ".swiper-pagination_steps",
				clickable: true,
			},
		});
	};

	breakpoint.addListener(breakpointChecker);

	breakpointChecker();
})();

function burgerInit() {
	$(".burger").click(function () {
		$(this).toggleClass("show__popup-btn");
		$(this).toggleClass("close-menu");
		$(this).toggleClass("is-active");

		if ($(".burger").hasClass("close-menu")) {
			hidePopup("mobileMenuPopup");
		}
	});
}

$(document).ready(function () {
	popupInitialize();
	burgerInit();
});

var newsSlider = new Swiper("section.reviews .swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	freeMode: false,
	pagination: {
		el: "section.reviews .slider__nav",
		clickable: true,
	},
	breakpoints: {
        768: {
			slidesPerView: 2,
			spaceBetween: 16,
        },
        992: {
			slidesPerView: 3,
			spaceBetween: 20,
        },
    },
});

var blogSlider = new Swiper("section.blog .swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	freeMode: false,
	pagination: {
		el: "section.blog .slider__nav",
		clickable: true,
	},
	breakpoints: {
        768: {
			slidesPerView: 2,
			spaceBetween: 16,
        },
        992: {
			slidesPerView: 3,
			spaceBetween: 20,
        },
    },
});

var partnersSlider = new Swiper(".partners__slider.swiper", {
	slidesPerView: 2,
	spaceBetween: 10,
	loop: true,
	freeMode: false,
	autoplay: {
		delay: 6000,
	},
	navigation: {
		nextEl: ".partners .arrow.next",
		prevEl: ".partners .arrow.prev",
	},
	breakpoints: {
        768: {
			slidesPerView: 3,
			spaceBetween: 12,
        },
        992: {
			slidesPerView: 4,
			spaceBetween: 14,
        },
        1024: {
			slidesPerView: 5,
			spaceBetween: 16,
        },
        1280: {
			slidesPerView: 6,
			spaceBetween: 16,
        },
        1440: {
			slidesPerView: 6,
			spaceBetween: 20,
        },
    },
});

var postSlider = new Swiper(".post__slider .swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	freeMode: false,
	navigation: {
		nextEl: ".post__slider .arrow.next",
		prevEl: ".post__slider .arrow.prev",
	},
});

var serviceSlider = new Swiper(".service__slider__wrapper .swiper", {
	slidesPerView: 'auto',
	spaceBetween: 20,
	loop: true,
	freeMode: false,
});

var projectGallery = new Swiper(".slider.swiper", {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	freeMode: false,
	navigation: {
		nextEl: ".detail__project__slider .arrow.next",
		prevEl: ".detail__project__slider .arrow.prev",
	},
});

var serviceAccSlider = new Swiper(".service__accordeon__slider .swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	freeMode: false,
	navigation: {
		nextEl: ".service__accordeon__slider__nav .arrow.next",
		prevEl: ".service__accordeon__slider__nav .arrow.prev",
	},
});

var projectGallery = new Swiper(".process__wrapper.swiper", {
	slidesPerView: 'auto',
	spaceBetween: 20,
	loop: false,
	freeMode: true,
});
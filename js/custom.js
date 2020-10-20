

// menu mobile
$(document).on('click', '.btn-menu-mobile', function () {
    $('body').addClass('pace-done sidebar-open').prepend('<div class="app-backdrop backdrop-sidebar"></div>');
});
$(document).on('click', '.backdrop-sidebar', function () {
    $('body').removeClass('pace-done  sidebar-open');
    $('.backdrop-sidebar').remove();
});
$(document).on('click', '.btn-close-menu', function () {
    $('body').removeClass('pace-done  sidebar-open');
    $('.backdrop-sidebar').remove();
});
// menu footer
$(document).on('click', '.menu-footer .menu-link', function () {
    var $submenu = $(this).next('.footer-list');
    if ($submenu.length < 1)
        return;
    if ($submenu.is(":visible")) {
        $submenu.slideUp(function () {
            $('.menu-footer.open').removeClass('open');
        });
        $(this).removeClass('open');
        return;
    }
    $('.menu-footer .footer-list:visible').slideUp();
    $('.menu-footer .menu-link').removeClass('open');
    $submenu.slideToggle(function () {
        $('.menu-footer.open').removeClass('open');
    });
    $(this).addClass('open');
});

$(document).on('click', '.menu-mobile .megamenu.has-sub .menu-item-link', function () {
    var $submenu = $(this).next('.megamenu-menu');
    if ($submenu.length < 1)
        return;
    if ($submenu.is(":visible")) {
        $submenu.slideUp(function () {
            $('.menu-mobile .megamenu.has-sub.open').removeClass('open');
        });
        $(this).removeClass('open');
        return;
    }
    $('.menu-mobile .megamenu.has-sub  .megamenu-menu:visible').slideUp();
    $('.menu-mobile .megamenu.has-sub .menu-item-link').removeClass('open');
    $submenu.slideToggle(function () {
        $('.megamenu.has-sub.open').removeClass('open');
    });
    $(this).addClass('open');
});
$(document).on('click', '.megamenu-sub.has-sub-sub .menu-item-link', function () {
    var $submenu = $(this).next('.megamenu-menu-sub');
    if ($submenu.length < 1)
        return;
    if ($submenu.is(":visible")) {
        $submenu.slideUp(function () {
            $('.megamenu-sub.has-sub-sub.open').removeClass('open');
        });
        $(this).removeClass('open');
        return;
    }
    $('.megamenu-sub.has-sub-sub .megamenu-menu-sub:visible').slideUp();
    $('.megamenu-sub.has-sub-sub .menu-item-link').removeClass('open');
    $submenu.slideToggle(function () {
        $('.megamenu-sub.has-sub-sub.open').removeClass('open');
    });
    $(this).addClass('open');
});

$(document).ready(function () {
    $("#owl-home-main-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        autoPlay: 5000,
        navigationText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>']
    });
    $("#home-brand-slider").owlCarousel({
        items: 5,
        itemsDesktop: [992, 5],
        itemsDesktopSmall: [992, 3],
        itemsTablet: [768, 2],
        itemsMobile: [576, 1],
        navigation: false,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: 5000,
        autoplayHoverPause: false,
        autoplayTimeout: 5000,
        navigationText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>']
    });
    $("#home-ourActivity-slider").owlCarousel({
        items: 3,
        itemsDesktop: [992, 2],
        itemsDesktopSmall: [992, 1],
        itemsTablet: [768, 1],
        itemsMobile: [576, 1],
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoplay: false,
        // autoplayTimeout: 5000,
        autoplayHoverPause: false,
        navigationText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>']
    });
})

jQuery(document).ready(function() {
	var offset = 220;
    var duration = 500;
    jQuery('#back-to-top').fadeOut(duration);
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('#back-to-top').fadeIn(duration);
		} else {
			jQuery('#back-to-top').fadeOut(duration);
		}
	});
	jQuery('#back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
	window.onscroll = changePos;
	function changePos() {
		var header = $("#header");
		var headerheight = $("#header").height();
		if (window.pageYOffset > headerheight) {		
			header.addClass('scrolldown');
		} else {
			header.removeClass('scrolldown');
		}
	}
});
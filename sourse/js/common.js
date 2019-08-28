var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
		menu = $(".menu-mobile--js")

jQuery(document).ready(function ($) {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({}); 

	$(".header-block__btn").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'), 
			top = $(id).offset().top; 
	$('body,html').animate({scrollTop: top}, 1000); 
	});
 
 




	// form
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: 'action.php', //Change
			data: th.serialize()
		}).success(function () {
			// $.magnificPopup.close();
			$.magnificPopup.open({
				items: {
					src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			})
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				ym(53383120, 'reachGoal', 'zakaz');
			}, 4000);
		});
		return false;
	});
	// /form
});


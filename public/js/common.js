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
 
 


function checkForm() { 
	if($(".custom-input__input").is(":checked")){
		document.querySelector(".form-wrap__btn").classList.remove("disabled")
	}
	else{
		document.querySelector(".form-wrap__btn").classList.add("disabled")
		
	}
}
checkForm()
$(".custom-input__input").change(function(){
	checkForm();
})
checkForm()
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
				// ym(53383120, 'reachGoal', 'zakaz');
			}, 4000);
		});
		return false;
	});
	// /form

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
		tClose: 'Закрыть (Esc)',
	});
});


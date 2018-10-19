var myFullpage = new fullpage('#fullpage', {

	menu: '#menu',
	lockAnchors: false,
	anchors:['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthsection'],
	showActiveTooltip: false,
	slidesNavigation: false
});

$(document).ready(function(){
  $('.welcome-gallery').slick({
  	prevArrow: '<span class="slick-prev icon-chevron-left"></span>',
  	nextArrow: '<span class="slick-next icon-chevron-right"></span>'
  });
});
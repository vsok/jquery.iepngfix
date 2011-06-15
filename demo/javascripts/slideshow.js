$(document).ready(function(){
  var slideshowContent = $('#slideshow .content');
	
  // transparent fading PNG fix for IE5/6/7/8,
  // applied to IMG tags with PNGs
  slideshowContent.find('img').fixPNG();

  // transparent fading PNG fix for IE5/6/7/8, applied
  // to elements with a CSS background-image of type PNG
  $('#slideshow a.quote').fixPNG();

  // content slider
  var CYCLE_TIMEOUT_S = 10;
  var CYCLE_SPEED_S = 2;

  slideshowContent.cycle({
		fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		timeout: CYCLE_TIMEOUT_S * 1000,
		speed: CYCLE_SPEED_S * 1000,
		pager: '#slideshow .counter',
		cleartypeNoBg: true,
	
	    //callback fn that creates a thumbnail to use as pager anchor 
	    pagerAnchorBuilder: function(idx, slide) { 
	        return '<a href="#"></a>';
	    }
  });
});
// TODO: write a script to auto-generate a minified
//       version of this file

// jquery.iepngfix provides a workaround for an IE issue where a blob of
// black color appears when fading transparent PNGs using opacity, where
// one is layered on top of another image (even JPG) at a higher CSS z-i.
//
// It accomplishes this by setting the AlphaImageLoader filter in IE,
// adding support for PNG transparency in IE > 5.5
//
// THE PITFALLS
// source: http://24ways.org/2007/supersleight-transparent-png-in-ie6
// Please read the above link's "The pitfalls" section to better
// understand performance issues and other limitations of this method.
(function( $ ) {
	// TODO: document the purpose of each of these parameters in high detail
	// sizingMethod: either "crop" or "scale"
	// forceBG: force the elem's style "background-image" attribute to be considered
	//          rather than using the img tag's src attribute
	// Sizing method defaults to scale (matches image dimensions)
	// TODO: enforce either "crop" or "scale"
	$.fn.fixPNG = function(options) {
		
		// Don't bother with non-IE browsers
		if (!($.browser.msie)) return this;
		
		// This fix only applies to IE 5/6/7/8
		var MIN_IE_VERSION = 5;
		var MAX_IE_VERSION = 8;
		var ieVersion = parseInt(jQuery.browser.version, 10);
		if (ieVersion < MIN_IE_VERSION || ieVersion > MAX_IE_VERSION) return this;
		
		// Empty 1x1px GIF, Base 64 encoded
		// src: Comment by George Stephanis at http://allinthehead.com/retro/338/supersleight-jquery-plugin
		var SHIM_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACXZwQWcAAAABAAAAAQDHlV/tAAAAAnRSTlMA/1uRIrUAAAAKSURBVAjXY/gPAAEBAQAbtu5WAAAAAElFTkSuQmCC';
		
		// Set up default options
		var defaults = {
			sizingMethod : 'scale',
			forceBG      : false
		}
		
		// Overwrite default options with user provided
		// ones and merge them into "options"
		options = $.extend({}, defaults, options);
		
		return this.each(function(i, elem) {

			// determine if this node is an image
			var isImg = options.forceBG ? false : $.nodeName(elem, "img");

			// image name
			var imgName = isImg ? elem.src : elem.currentStyle.backgroundImage;

			// image src
			var src = isImg ? imgName : imgName.substring(5,imgName.length-2);

			if (isImg) {
				var styles = {
					// Manually set the CSS width and height so
					// that the shim properly expands to fill the image
					'width'  : $(elem).width() + 'px',
					'height' : $(elem).height() + 'px',
					
					// Set the "AlphaImageLoader" proprietary IE filter
					'filter' : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='" + options.sizingMethod + "')"
				};
				$(elem).css(styles).attr('src', SHIM_IMAGE);
			} else {
				// Set the "AlphaImageLoader" proprietary filter IE filter
				this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='" + options.sizingMethod + "')";
				
				this.style.backgroundImage = "url(" + SHIM_IMAGE + ")";
			}
		});
	}
})( jQuery );
// TODO: write a script to auto-generate a minified
//       version of this file

// jquery.iepngfix provides a workaround for an IE issue where a blob of
// black color appears when fading transparent PNGs using opacity, where
// one is layered on top of another image (even JPG) at a higher CSS z-index.
//
// It accomplishes this by setting the AlphaImageLoader filter in IE,
// adding support for PNG transparency in IE > 5.5
//
// THE PITFALLS
// source: http://24ways.org/2007/supersleight-transparent-png-in-ie6
// Please read the above link's "The pitfalls" section to better
// understand performance issues and other limitations of this method.

(function ($) {
if (!$) return;

var DEFAULT_EMPTY_IMAGE_PATH = "empty.gif";
var DEFAULT_SIZING_METHOD = "scale";

$.fn.extend({
	// TODO: document the purpose of each of these parameters in high detail
	// sizingMethod: either "crop" or "scale"
	fixPNG: function(sizingMethod, forceBG, emptyImagePath) {
		// Don't bother with non-IE browsers
		if (!($.browser.msie)) return this;
		
		// Path to empty 1x1px GIF goes here
		emptyImagePath = emptyImagePath || DEFAULT_EMPTY_IMAGE_PATH;
		
		// Sizing method defaults to scale (matches image dimensions)
		// TODO: enforce either "crop" or "scale"
		sizingMethod = sizingMethod || DEFAULT_SIZING_METHOD;
		
		this.each(function() {
			// determine if this node is an image
			var isImg = forceBG ? false : jQuery.nodeName(this, "img");
			
			// image name
			var imgName = isImg ? this.src : this.currentStyle.backgroundImage;
			
			// image src
			var src = isImg ? imgName : imgName.substring(5,imgName.length-2);
			
			// Set the "AlphaImageLoader" proprietary filter IE filter
			this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='" + sizingMethod + "')";
			
			if (isImg) {
				this.src = emptyImagePath;
			} else {
				this.style.backgroundImage = "url(" + emptyImagePath + ")";
			}
		});
		
		return this;
	}
});
})(jQuery);
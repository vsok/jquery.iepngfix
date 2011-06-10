// TODO: write a script to auto-generate a minified
//       version of this file
(function ($) {
if (!$) return;

var DEFAULT_EMPTY_IMAGE_PATH = "empty.gif";
var DEFAULT_SIZING_METHOD = "scale";

$.fn.extend({
	// TODO: document the purpose of each of these parameters in high detail
	fixPNG: function(sizingMethod, forceBG, emptyImagePath) {
		// Don't bother with non-IE browsers
		if (!($.browser.msie)) return this;
		
		// Path to empty 1x1px GIF goes here
		emptyImagePath = emptyImagePath || DEFAULT_EMPTY_IMAGE_PATH;
		
		// Sizing method defaults to scale (matches image dimensions)
		sizingMethod = sizingMethod || DEFAULT_SIZING_METHOD;
		
		this.each(function() {
			var isImg = (forceBG) ? false : jQuery.nodeName(this, "img");
			var imgname = (isImg) ? this.src : this.currentStyle.backgroundImage;
			var src = (isImg) ? imgname : imgname.substring(5,imgname.length-2);
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
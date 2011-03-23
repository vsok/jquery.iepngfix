// IE6/7/8 transparent PNG fix
// The issue is that a blob of black color appears when using transparent PNGs,
// where one is layered on top of another on a higher CSS z-index.
//
// This code amalgates various solutions to this problem that I found elsewhere
// on the Internet with a few additions and packages it all as a friendly jQuery plugin.
//
// sources:
// http://stackoverflow.com/questions/1156985/jquery-cycle-ie7-transparent-png-problem
// http://stackoverflow.com/questions/1204457/how-to-solve-hack-fading-semi-transparent-png-bug-in-ie8


// TODO: minify this
(function ($) {
if (!$) return;
$.fn.extend({
    fixPNG: function(sizingMethod, forceBG) {
            if (!($.browser.msie)) return this;
            var emptyimg = "empty.gif"; //Path to empty 1x1px GIF goes here
            sizingMethod = sizingMethod || "scale"; //sizingMethod, defaults to scale (matches image dimensions)
            this.each(function() {
                    var isImg = (forceBG) ? false : jQuery.nodeName(this, "img"),
                            imgname = (isImg) ? this.src : this.currentStyle.backgroundImage,
                            src = (isImg) ? imgname : imgname.substring(5,imgname.length-2);
                    this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='" + sizingMethod + "')";
                    if (isImg) this.src = emptyimg;
                    else this.style.backgroundImage = "url(" + emptyimg + ")";
            });
            return this;
    }
});
})(jQuery);
(function( $ ) {
	
	var TRIANGLES_IMG_WIDTH  = 89+'px';
	var TRIANGLES_IMG_HEIGHT = 251+'px';
	
	var SIZING_METHOD_SCALE = 'scale';
	var SIZING_METHOD_CROP  = 'crop';
	
	function ieFilterValue(src, sizingMethod) {
		var FILTER_NAME = "progid:DXImageTransform.Microsoft.AlphaImageLoader";
		return FILTER_NAME+"(src='"+src+"', sizingMethod='"+sizingMethod+"')";
	}
	
	module('IMG elements');

	test('set AlphaImageLoader filter', function() {
		var trianglesImg = $('img.triangles')
		var src = trianglesImg.attr('src');
		trianglesImg.fixPNG();

		equal(trianglesImg.css('filter'), ieFilterValue(src, SIZING_METHOD_SCALE)); 
	});
}( jQuery ) );
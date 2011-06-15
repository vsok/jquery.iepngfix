(function( $ ) {
	
	var TRIANGLES_IMG_WIDTH  = 89+'px';
	var TRIANGLES_IMG_HEIGHT = 251+'px';
	
	// TODO: refactor these constants into the plugin
	//       itself then access them directly
	// AlphaImageLoader sizingMethod options
	var SIZING_METHOD_SCALE = 'scale';
	var SIZING_METHOD_CROP  = 'crop';
	
	// classname of div wrapper for the divWrapImages option
	var DIV_WRAPPER_CLASS = 'iepngfix-wrapper';
	
	function ieFilterValue(src, sizingMethod) {
		var FILTER_NAME = "progid:DXImageTransform.Microsoft.AlphaImageLoader";
		return FILTER_NAME+"(src='"+src+"', sizingMethod='"+sizingMethod+"')";
	}
	
	module('IMG elements');

	test('set AlphaImageLoader filter', function() {
		expect(1);
		var trianglesImg = $('img.triangles');
		var src = trianglesImg.attr('src');
		trianglesImg.fixPNG();

		equal(trianglesImg.css('filter'), ieFilterValue(src, SIZING_METHOD_SCALE)); 
	});
	
	test('divWrapImages option surrounds element in a div', function() {
		expect(3);
		var trianglesImg = $('img.triangles');
		
		equal(trianglesImg.parent().attr('id'), "qunit-fixture", "expected direct parent to be the qunit-fixture DIV before running fixPNG({divWrapImages: true})");
		
		var parent = trianglesImg.fixPNG({divWrapImages: true}).parent();
		equal(parent[0].nodeName, 'DIV', "expected the parent node to be a DIV");
		ok(parent.hasClass(DIV_WRAPPER_CLASS), "expected the parent DIV to have class "+DIV_WRAPPER_CLASS);
	});
}( jQuery ) );
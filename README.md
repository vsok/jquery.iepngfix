# IE6/7/8 transparent PNG fix

Fixes an IE issue where a blob of black color appears when fading transparent PNGs using opacity, where one is layered on top of another image (even JPG) at a higher CSS z-index.

This code amalgamates various solutions to this problem that I found elsewhere
on the Internet with a few additions, cleaned up and packaged as a friendly jQuery plugin.

## Usage

Make sure that you've included jQuery

    <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js></script>

In your jQuery script, use a selector to pick out the images that you want to apply the PNG fix to.

    $('selectorhere').fixPNG(sizingMethod, forceBG, emptyImagePath);

sizingMethod: either "scale" or "crop". You generally want "scale"
forceBG: TODO:NEED TO CLARIFY THE PURPOSE OF THIS AND DOCUMENT IT
emptyImagePath: path to a 1x1 transparent .gif
		
Example:

    $('#slideshow .content img').fixPNG('scale', true, '../../empty.gif');

## Demo

Check out demo.html in the "demo" folder; you'll have to run this under a web server such as Apache because Windows doesn't recognize the UNIX style pathnames. Alternatively, view the slideshow on the homepage of http://soliddesigngroup.net which utilizes this method.

The cycling slideshow demonstrates how jquery.iepngfix removes the black blobs when transitioning PNG with a transparent BG, and overlaid on top of another image. View the source to see how it all works.

## Notes

Use jquery.iepngfix.min.js for production. Minified using [Douglas Crawford's](http://javascript.crockford.com/) [JSMin](http://www.crockford.com/javascript/jsmin.html) utility.

## Issues

Please add any issues you might find to the Github issue tracker. Or feel free to fork and send a pull request.

## License

This project is licensed under the MIT license.

## Author

Created by Jonathan from Solid Design Group, a [Lehigh Valley website design](http://soliddesigngroup.net) company.

## Sources

* [http://stackoverflow.com/questions/1156985/jquery-cycle-ie7-transparent-png-problem](http://stackoverflow.com/questions/1156985/jquery-cycle-ie7-transparent-png-problem)
* [http://stackoverflow.com/questions/1204457/how-to-solve-hack-fading-semi-transparent-png-bug-in-ie8](http://stackoverflow.com/questions/1204457/how-to-solve-hack-fading-semi-transparent-png-bug-in-ie8)
* [24 Ways - "Transparent PNGs in Internet Explorer 6"](http://24ways.org/2007/supersleight-transparent-png-in-ie6)

## Other solutions I found with a cursory Googling:

* [DD_belatedPNG](http://www.dillerdesign.com/experiment/DD_belatedPNG/)
* [PNG Fix](http://blog.pauljamescampbell.co.uk/about-2/png-fix/)
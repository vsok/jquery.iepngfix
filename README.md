# IE5/6/7/8 transparent PNG fix

Adds IE5/6/7/8 support for transparent PNGs and fixes issue where black blobs appear on non-binary alpha channel areas of PNGs when using CSS opacity or fading with jquery.cycle.

This code amalgamates various solutions to this problem that I found elsewhere
on the Internet with a few additions, cleaned up and packaged as a friendly jQuery plugin.

Unlike other plugins there's no need to specify a 1x1 shim file, as a Base64 version is embedded directly in the plugin source.

## Usage

Make sure that you've included jQuery:

    <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js></script>

In your jQuery script, use a selector to pick out the elements that you want to apply the PNG fix to.

IMG elements using a PNG:

    $('#slideshow img').fixPNG();

other elements with a CSS 'background-image' PNG:

    $('.bg-container').fixPNG();

And you're done! jquery.iepngfix will automatically determine which case applies to each selected element and fix it as appropriate. Elements that don't apply will be ignored.

For performance reasons you should only apply this fix where needed, but you can also specify all images or even all elements on a page:

    $('body *').fixPNG();
    $('img').fixPNG();

## Notes

Only apply this fix to PNGs with transparent backgrounds. This fix uses the IE "AlphaImageLoader" filter which slows down the browser, so use it sparingly and only as needed.

Use jquery.iepngfix.min.js for production. Minified using [Douglas Crawford's](http://javascript.crockford.com/) [JSMin](http://www.crockford.com/javascript/jsmin.html) utility.

## Demo

Check out demo.html in the "demo" folder.

## Issues

Please add any issues you might find to the Github issue tracker. Or feel free to fork and send a pull request.

## License

This project is licensed under the MIT license.

## Author

Created by Jonathan from Solid Design Group, a [Lehigh Valley website design](http://soliddesigngroup.net) company.

## Sources

* [StackOverflow - jquery cycle IE7 transparent png problem](http://stackoverflow.com/questions/1156985/jquery-cycle-ie7-transparent-png-problem)
* [StackOverflow - How to solve/hack fading semi-transparent PNG bug in IE8?](http://stackoverflow.com/questions/1204457/how-to-solve-hack-fading-semi-transparent-png-bug-in-ie8)
* [24 Ways - "Transparent PNGs in Internet Explorer 6"](http://24ways.org/2007/supersleight-transparent-png-in-ie6)
* [mezzoblue - IE8 Still Failing PNG Alpha](http://mezzoblue.com/archives/2010/05/20/ie8_still_fa/)

## Other solutions:

* [Superslight jQuery plugin](http://allinthehead.com/retro/338/supersleight-jquery-plugin)
* [jquery.pngFix.js](http://jquery.andreaseberhard.de/pngFix/)
* [jQuery.ifixpng](http://jquery.khurshid.com/ifixpng.php)
* [Unit PNG Fix](http://labs.unitinteractive.com/unitpngfix.php)
* [DD_belatedPNG](http://www.dillerdesign.com/experiment/DD_belatedPNG/)
* [PNG Fix](http://blog.pauljamescampbell.co.uk/about-2/png-fix/)
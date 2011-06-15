# IE5/6/7/8 transparent PNG fix

Adds IE5/6/7/8 support for PNGs, and provides a workaround for an IE issue where a blob of black color appears when fading transparent PNGs using opacity.

This code amalgamates various solutions to this problem that I found elsewhere
on the Internet with a few additions, cleaned up and packaged as a friendly jQuery plugin.

Unlike other plugins there's no need to specify a 1x1 shim file, as a Base64 version is embedded directly in the plugin source.

## Usage

Make sure that you've included jQuery:

    <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js></script>

In your jQuery script, use a selector to pick out the elements that you want to apply the PNG fix to:

    $('#slideshow img').fixPNG();

or

    $('.bg-container').fixPNG();

And you're done! jquery.iepngfix will automatically pick out IMG tags with PNGs, and elements that have a CSS background-image with PNGs and fix them.

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
* [IE8 Still Failing PNG Alpha](http://mezzoblue.com/archives/2010/05/20/ie8_still_fa/)

## Other solutions:

* [Superslight jQuery plugin](http://allinthehead.com/retro/338/supersleight-jquery-plugin)
* [DD_belatedPNG](http://www.dillerdesign.com/experiment/DD_belatedPNG/)
* [PNG Fix](http://blog.pauljamescampbell.co.uk/about-2/png-fix/)
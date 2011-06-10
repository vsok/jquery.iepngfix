# IE6/7/8 transparent PNG fix

Fixes an issue where a blob of black color appears when using transparent PNGs, where one is layered on top of another image (even JPG) at a higher CSS z-index.

This code amalgamates various solutions to this problem that I found elsewhere
on the Internet with a few additions, cleaned up and packaged as a friendly jQuery plugin.

## Demo

In the future I plan on adding a standalone demo for this technique. If anyone would like to contribute this feel free to fork and send a pull request, and I will credit you in this README file!

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
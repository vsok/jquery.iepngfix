# IE6/7/8 transparent PNG fix

Fixes an issue where a blob of black color appears when using transparent PNGs, where one is layered on top of another on a higher CSS z-index.

This code amalgates various solutions to this problem that I found elsewhere
on the Internet with a few additions and packages it all as a friendly jQuery plugin.

## Notes

Use jquery.iepngfix.min.js for production. Minified using [Douglas Crawford's](http://javascript.crockford.com/) [JSMin](http://www.crockford.com/javascript/jsmin.html) utility.

## Issues

Please add any issues you might find to the Github issue tracker. Or feel free to fork and send a pull request.

## License

This project is licensed under the MIT license.

## Author

Created by Solid Design Group, a [Lehigh Valley website design](http://soliddesigngroup.net) company.

## Sources

* [http://stackoverflow.com/questions/1156985/jquery-cycle-ie7-transparent-png-problem](http://stackoverflow.com/questions/1156985/jquery-cycle-ie7-transparent-png-problem)
* [http://stackoverflow.com/questions/1204457/how-to-solve-hack-fading-semi-transparent-png-bug-in-ie8](http://stackoverflow.com/questions/1204457/how-to-solve-hack-fading-semi-transparent-png-bug-in-ie8)
* [24 Ways - "Transparent PNGs in Internet Explorer 6"](http://24ways.org/2007/supersleight-transparent-png-in-ie6)

## Other solutions I found with a cursory Googling:

* [DD_belatedPNG](http://www.dillerdesign.com/experiment/DD_belatedPNG/)
* [PNG Fix](http://blog.pauljamescampbell.co.uk/about-2/png-fix/)
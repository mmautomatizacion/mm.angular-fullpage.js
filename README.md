# Angular fullPage.js
Angular directive for use the [jQuery fullPage.js library](https://github.com/alvarotrigo/fullPage.js) on Angular.js v1.x


---------------------


This code is a completely adapted version of [fullPage.js library developed by Alvaro Trigo](https://github.com/alvarotrigo/fullPage.js) for working with Angular.js v1.X.


---------------------

**Donate for this project!!**


[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=9MCU8ESDM26KC&lc=ES&item_name=angular%2dfullpage%2ejs&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted)

**Donate for original jQuery project (Alvaro Trigo)!!**

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


## Instalation ##
Only you have to do is include the library into the HTML. For do that, download the file and include like another JS code:

```html
<script type="text/javascript" src="angular-fullpage.min.js"></script>
```

You also have to include the CSS stylesheet of the original jQuery library
```html
<link type="text/css" rel="stylesheet" href="jquery.fullPage.min.css">
```


## First steps ##
The use of the Angular fullPage directive is similar to the use of [the original jQuery fullPage.js library of Alvaro Trigo](https://github.com/alvarotrigo/fullPage.js). The only diference is you only have to define a attribute in the full-page div, and no more:
```html
<div full-page></div>
```

Here a complete example:
```html
<div full-page>
  <div class='section' data-anchor='section1'></div>
  <div class='section' data-anchor='section2'>
    <div class='slide' data-anchor='slide1'></div>
    <div class='slide' data-anchor='slide2'></div>
  </div>
</div>
```

## Configure options of fullPage.js ##
For configure the behaviour of Angular fullPage.js we can use a config provider, named 'fullPageConfig', and define the options object throw 'setConfig' function. Here's an example:
```js
(function() {
	'use strict';

	angular
		.module('app')
		.config(function(fullPageConfigProvider) {
			fullPageConfigProvider.setConfig({
				scrollBar: true,
				sectionSelector: '.fp_section',
        		slideSelector: '.fp_slide',
			});
       	});

})();
```

You can find all the possible options to configure in the [original jQuery project readme](https://github.com/alvarotrigo/fullPage.js#initialization).


## Methods. The Angular FullPage Service ##
You can interact with Angular FullPage by the Angular FullPage Service. Only you have to do is inject the service "fullPageService" and enjoy. There is an example that move section up on load:
```js
(function() {
	'use strict';

	angular
		.module('app')
		.controller('app.indexCtrl', indexCtrl);


	indexCtrl.$inject = ['fullPageService'];


	function indexCtrl(fullPageService) {
		fullPageService.moveSectionUp();
	}

})();
```

You can find all the possible methods to configure in the [original jQuery project readme](https://github.com/alvarotrigo/fullPage.js/blob/master/README.md#methods).


## What's next? ##
For further information and complete documentation, you have to access the official site of [the original jQuery fullPage.js library](https://github.com/alvarotrigo/fullPage.js)



## Keep in mind ##
 - This project contains the complete code of the original modified for work with Angular. **Is not necessary (and not recommended) to include the jQuery original library**.
 - Angular fullPage.js is not compatible with Angular routing (ngRoute, uiRoute...).
 - You *can* use **HTML5 mode**.
 - If you have any doubt, contact me.

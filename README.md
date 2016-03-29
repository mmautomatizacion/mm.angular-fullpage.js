# Angular fullPage.js
Angular directive for use the [jQuery fullPage.js library](https://github.com/alvarotrigo/fullPage.js) on Angular.js v1.x


---------------------


This code is a completely adapted version of [fullPage.js library developed by Alvaro Trigo](https://github.com/alvarotrigo/fullPage.js) for working with Angular.js v1.X.

Note: this library is an alpha version. There is a lot of errors in the code.



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
<link type="text/css" rel="stylesheet" href="jquery.fullPage.css">
```


## First steps ##
The use of the Angular fullPage directive is similar to the use of [the original jQuery fullPage.js library of Alvaro Trigo](https://github.com/alvarotrigo/fullPage.js). The only diference is that for define a full-page div, you define a attribute, not a class:
```html
<div full-page></div>
```

There is a complete example:
```html
<div full-page>
  <div class='section' data-anchor='section1'></div>
  <div class='section' data-anchor='section2'>
    <div class='slide' data-anchor='slide1'></div>
    <div class='slide' data-anchor='slide2'></div>
  </div>
</div>
```


## What's next? ##
For further information and complete documentation, you have to access the official site of the original jQuery project: http://alvarotrigo.com/fullPage/

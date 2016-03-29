# angular-fullpage.js
Angular directive for use the jQuery fullPage.js library on Angular.js v1.x


---------------------


This code is a completely adapted version of fullPage.js library developed by Alvaro Trigo (https://github.com/alvarotrigo/fullPage.js) for working with Angular.js v1.X.

Note: this library is an alpha version. There is a lot of errors in the code.

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
The use of the Angular fullPage directive is similar to the use of the original jQuery fullPage.js library of Alvaro Trigo (https://github.com/alvarotrigo/fullPage.js). The only diference is that for define a full-page div, you define a attribute, not a class:
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

# labelr - A lightweight, dependency free, label generator
- No dependencies!
- Supports: IE10+, Chrome 45+, Firefox 43+, Safari 9+
- 2kb minified and gzipped

## Install

### Node Package Manager
```
npm install labelr
```

### Bower
```
bower install labelr
```

### Download
You can [download](http://www.google.com) the scripts yourself and include with a script tag
``` html
<script type="text/javascript" src="lablr.js"></script>
```
or 
``` javascript
require('flatpickr')
```

## Syntax
``` javascript
labelr('selector', [options]);
```
### Basics
#### A basic label
call labelr 
``` html 
<script>
labelr('.label');
</script>
```
Defaults to the title attribute for label text    
``` html
<img title="hello world" src="hello.jpg" class="label"></img>
```
![basic example](https://github.com/mschultz4/lablr/assets/basic.svg)

#### Select `alt` tags instead of `title`
``` html
<script>
labelr('.label', {attribute: 'alt'});
</script>
```
``` html
<img alt="this is alt" src="hello.jpg" class="label"></img>
```
![alt selection](https://github.com/mschultz4/lablr/assets/alt.svg)

#### Style label
``` html
<script>
labelr('.label', {style: {backgroundColor: 'indigo', color: 'white'}});
</script>
```
Most css styles are available
``` html
<img title="style changed" src="styles.svg" class="label"></img>
```
![styles changed](https://github.com/mschultz4/lablr/assets/styles.svg)


### List of settings
An example settings object might look something like
``` javascript
{
    attribute: 'alt',
    style: {
        backgroundColor: 'indigo', 
        color: 'white'
        fontFamily: 'serif'
    }
}
```
#### Attributes
    * alt
    * title
#### Effects
    * fade
    * popup
#### Styles
    * Any styles included as CSS javascript object

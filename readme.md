# html-tags [![Build Status](https://secure.travis-ci.org/sindresorhus/html-tags.png?branch=master)](http://travis-ci.org/sindresorhus/html-tags)

> List of standard HTML tags

Returns an array of the standard HTML tags.

[Also available in JSON.](html-tags.json)


## Install

Download [manually](https://github.com/sindresorhus/html-tags/releases) or with a package-manager.

#### [npm](https://npmjs.org/package/html-tags)

```
npm install --save html-tags
```

#### [Bower](http://bower.io)

```
bower install --save html-tags
```

#### [Component](https://github.com/component/component)

```
component install sindresorhus/html-tags
```


## Example

##### Node.js

```js
var htmlTags = require('html-tags');
```

##### Bower

```html
<script src="bower_components/html-tags/html-tags.js"></script>
```

##### Usage

```js
console.log(htmlTags);
//=> ['a', 'abbr', 'acronym', ...]
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)

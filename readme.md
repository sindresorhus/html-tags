# html-tags [![Build Status](https://travis-ci.org/sindresorhus/html-tags.svg?branch=master)](https://travis-ci.org/sindresorhus/html-tags)

> List of standard HTML tags

It's just a [JSON file](html-tags.json). So can be used wherever.


## Install

Download [manually](https://github.com/sindresorhus/html-tags/releases) or with a package-manager.

```bash
$ npm install --save html-tags
```

```bash
$ bower install --save html-tags
```

```bash
$ component install sindresorhus/html-tags
```


## Usage

```js
var htmlTags = require('html-tags');

console.log(htmlTags);
//=> ['a', 'abbr', 'acronym', ...]
```

Can be used with require, global and AMD in the browser.


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)

# html-tags [![Build Status](https://travis-ci.org/sindresorhus/html-tags.svg?branch=master)](https://travis-ci.org/sindresorhus/html-tags)

> List of standard HTML tags

It's just a [JSON file](html-tags.json). So can be used wherever.

It intentionally leaves out obsolete tags.


## Install

```sh
$ npm install --save html-tags
```


## Usage

```js
const htmlTags = require('html-tags');

console.log(htmlTags);
//=> ['a', 'abbr', 'acronym', ...]
```

And void (self-closing) tags:

```js
const voidHtmlTags = require('html-tags/void');

console.log(voidHtmlTags);
//=> ['area', 'base', 'br', ...]
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)

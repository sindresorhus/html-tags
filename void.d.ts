/**
List of void (self-closing) HTML tags.

@example
```
import voidHtmlTags = require('html-tags/void');

console.log(voidHtmlTags);
//=> ['area', 'base', 'br', ...]
```
*/
declare const voidHtmlTags: readonly string[];

export = voidHtmlTags;

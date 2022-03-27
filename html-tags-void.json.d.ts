export type HTMLTagsVoid =
	| 'area'
	| 'base'
	| 'br'
	| 'col'
	| 'embed'
	| 'hr'
	| 'img'
	| 'input'
	| 'link'
	| 'menuitem'
	| 'meta'
	| 'param'
	| 'source'
	| 'track'
	| 'wbr'

/**
List of standard, self-closing HTML tags.
@example
```
import htmlTags = require('html-tags/html-tags-void.json');
console.log(htmlTags);
//=> ['a' | 'abbr' | 'acronym' …]
```
*/
declare const htmlTags: readonly HTMLTagsVoid[];
export default htmlTags;

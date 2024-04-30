import test from 'ava';
import htmlTags, {voidHtmlTags} from './index.js';

test('htmlTags is an array of HTML tags', t => {
	t.true(Array.isArray(htmlTags));
	t.true(htmlTags.length > 10 && htmlTags.length < 1000);
});

test('voidHtmlTags is an array of void HTML tags', t => {
	t.true(Array.isArray(voidHtmlTags));
	t.true(voidHtmlTags.length > 10 && voidHtmlTags.length < 1000);
});

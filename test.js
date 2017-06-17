import test from 'ava';
import voidHtmlTags from './void';
import htmlTags from '.';

test('`html-tags` is an array of HTML tags', t => {
	t.true(Array.isArray(htmlTags));
	t.true(htmlTags.length > 10 && htmlTags.length < 1000);
});

test('`html-tags/void` is an array of void HTML tags', t => {
	t.true(Array.isArray(voidHtmlTags));
	t.true(voidHtmlTags.length > 10 && voidHtmlTags.length < 1000);
});

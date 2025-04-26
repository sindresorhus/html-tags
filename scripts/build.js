import fs from 'node:fs/promises';
import * as cheerio from 'cheerio';

const CACHE_DIRECTORY = new URL('../.cache/', import.meta.url);

const getHtml = async url => {
	const cacheFile = new URL(url.split('/').at(-1), CACHE_DIRECTORY);

	let stat;

	try {
		stat = await fs.stat(cacheFile);
	} catch {}

	if (stat) {
		if (Date.now() - stat.ctimeMs < /* 10 hours */ 10 * 60 * 60 * 1000) {
			return fs.readFile(cacheFile, 'utf8');
		}

		await fs.rm(cacheFile);
	}

	const response = await fetch(url);
	const text = await response.text();

	await fs.mkdir(CACHE_DIRECTORY, {recursive: true});
	await fs.writeFile(cacheFile, text);

	return text;
};

async function getTags() {
	const htmlTags = [];

	{
		const html = await getHtml('https://html.spec.whatwg.org/multipage/indices.html');
		const $ = cheerio.load(html);
		const table = $('#elements-3 ~ table')[0];
		const tags = Array.from(
			$('th:first-child code', table),
			element => $(element).text().trim(),
		);

		htmlTags.push(...tags);
	}

	{
		const html = await getHtml('https://html.spec.whatwg.org/multipage/obsolete.html');
		const $ = cheerio.load(html);
		const container = $('#non-conforming-features ~ dl')[0];
		const tags = Array.from(
			$('> dt > dfn > code', container),
			element => $(element).text().trim(),
		);

		htmlTags.push(...tags);
	}

	return htmlTags.sort();
}

async function getVoidTags() {
	const html = await getHtml('https://html.spec.whatwg.org/multipage/syntax.html');
	const $ = cheerio.load(html);
	const tags = Array.from(
		$('dt:has(#void-elements) + dd > code > a'),
		element => $(element).text().trim(),
	);

	return [
		// https://html.spec.whatwg.org/multipage/obsolete.html#menuitem
		'menuitem',
		// https://html.spec.whatwg.org/multipage/obsolete.html#param
		'param',
		...tags,
	].sort();
}

await Promise.all([
	{getData: getTags, basename: 'html-tags', typeName: 'HtmlTags'},
	{getData: getVoidTags, basename: 'html-tags-void', typeName: 'VoidHtmlTags'},
].map(async ({getData, basename, typeName}) => {
	const tags = await getData();
	await fs.writeFile(
		new URL(`../${basename}.json`, import.meta.url),
		JSON.stringify(tags, undefined, '\t') + '\n',
	);
	await fs.writeFile(
		new URL(`../${basename}.d.ts`, import.meta.url),
		`export type ${typeName} =\n${tags.map(tag => `\t| '${tag}'`).join('\n')};\n`,
	);
}));


import {expectType, expectError} from 'tsd';
import htmlTags = require('.');
import voidHtmlTags = require('./void');
import htmlTagsJson = require('./html-tags.json');
import voidHtmlTagsJson = require('./html-tags-void.json');

expectType<readonly string[]>(htmlTags);
expectError(htmlTags.push(''));
expectType<readonly string[]>(voidHtmlTags);
expectError(voidHtmlTags.push(''));
expectType<readonly string[]>(htmlTagsJson);
expectError(htmlTagsJson.push(''));
expectType<readonly string[]>(voidHtmlTagsJson);
expectError(voidHtmlTagsJson.push(''));

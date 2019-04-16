import {expectType} from 'tsd';
import htmlTags = require('.');
import voidHtmlTags = require('./void');
import htmlTagsJson = require('./html-tags.json');
import voidHtmlTagsJson = require('./html-tags-void.json');

expectType<string[]>(htmlTags);
expectType<string[]>(voidHtmlTags);
expectType<string[]>(htmlTagsJson);
expectType<string[]>(voidHtmlTagsJson);

import {expectType, expectError} from 'tsd';
import htmlTags = require('.');
import htmlTagsVoid = require('./void');

expectType<readonly htmlTags.htmlTags[]>(htmlTags);
expectType<readonly string[]>(htmlTags);
expectError(htmlTags.push(''));

expectType<readonly htmlTagsVoid.htmlTagsVoid[]>(htmlTagsVoid);
expectType<readonly string[]>(htmlTags);
expectError(htmlTagsVoid.push(''));

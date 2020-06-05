import {expectType, expectError} from 'tsd';
import htmlTags, {HTMLTags} from '.'
import htmlTagsVoid, {HTMLTagsVoid} from './void'
import htmlTagsJson = require('./html-tags.json');
import htmlTagsVoidJson = require('./html-tags-void.json');

expectType<readonly HTMLTags[]>(htmlTags);
expectType<readonly string[]>(htmlTags);
expectError(htmlTags.push(''));
expectType<readonly HTMLTagsVoid[]>(htmlTagsVoid);
expectError(htmlTagsVoid.push(''));
expectType<readonly string[]>(htmlTagsJson);
expectError(htmlTagsJson.push(''));
expectType<readonly HTMLTagsVoid[]>(htmlTagsVoidJson);
expectError(htmlTagsVoidJson.push(''));

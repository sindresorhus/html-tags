import {expectType, expectError} from 'tsd';
import htmlTags from '.'
import htmlTagsVoid from './void'

expectType<readonly htmlTags.htmlTags[]>(htmlTags);
expectType<readonly string[]>(htmlTags);
expectError(htmlTags.push(''));

expectType<readonly htmlTagsVoid.htmlTagsVoid[]>(htmlTagsVoid);
expectType<readonly string[]>(htmlTags);
expectError(htmlTagsVoid.push(''));

'use strict';
var assert = require('assert');
var htmlTags = require('./html-tags');

it('should return an array of HTML tags', function () {
	assert(Array.isArray(htmlTags));
	assert(htmlTags.length > 10 && htmlTags.length < 1000);
});

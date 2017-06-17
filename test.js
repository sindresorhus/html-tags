'use strict';
var assert = require('assert');
var htmlTags = require('./');
var voidHtmlTags = require('./void')

it('should return an array of HTML tags', function () {
	assert(Array.isArray(htmlTags));
	assert(htmlTags.length > 10 && htmlTags.length < 1000);
});

it('should return an array of void HTML tags', function () {
	assert(Array.isArray(voidHtmlTags));
	assert(voidHtmlTags.length > 10 && voidHtmlTags.length < 1000);
});

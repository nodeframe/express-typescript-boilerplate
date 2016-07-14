"use strict";
var chai = require('chai');
var src_1 = require('../src');
var request = require("supertest-as-promised");
var expect = chai.expect;
describe('index', function () {
    it('should return Hello World', function () {
        return request(src_1.default).get('/').expect(200)
            .then(function (res) {
            expect(res.text).to.equals("Hello World");
        });
    });
});

//# sourceMappingURL=auth.spec.js.map

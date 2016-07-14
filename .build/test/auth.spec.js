"use strict";
var chai = require('chai');
var math_1 = require('../src/math');
var src_1 = require('../src');
var request = require("supertest-as-promised");
var expect = chai.expect;
describe('math', function () {
    it('should be able to add 10 with 20 to be 30', function () {
        expect(math_1.default.add(10, 20)).to.equals(30);
    });
    it('should be able to multiply 10 with 5 to be 50', function () {
        expect(math_1.default.mul(10, 5)).to.equals(50);
    });
    it('index should work', function () {
        return request(src_1.default).get('/').expect(200)
            .then(function (res) {
            expect(res.text).to.equals("Hello World");
        });
    });
});

//# sourceMappingURL=auth.spec.js.map

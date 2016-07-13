"use strict";
var chai = require('chai');
var math_1 = require('../src/math');
var expect = chai.expect;
describe('math', function () {
    it('should be able to add 10 with 20 to be 30', function () {
        expect(math_1.default.add(10, 20)).to.equals(30);
    });
    it('should be able to multiply 10 with 5 to be 50', function () {
        expect(math_1.default.mul(10, 5)).to.equals(50);
    });
});

//# sourceMappingURL=auth.spec.js.map

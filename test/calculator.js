const assert = require('chai').assert;
const add = require('../app/calculator').add;
const mul = require('../app/calculator').mul;
const div = require('../app/calculator').div;
const sub = require('../app/calculator').sub;


describe('App', function () {

    describe('Add', function () {

        it('Expected result 7 PASS', function () {
            let result = add(2, 2)
            assert.equal(result, 4)
        })

        it('Expected result 8 FAIL', function () {
            let result = add(2, 2)
            assert.equal(result, 1)
        })

    })

    describe('Sub', function () {

        it('Expected result 3 PASS', function () {
            let result = sub(2, 2)
            assert.equal(result, 0)
        })

        it('Expected result 5 FAIL', function () {
            let result = sub(2, 2)
            assert.equal(result, 4)
        })

    })


    describe('Mul', function () {

        it('Expected result 10 PASS', function () {
            let result = mul(2, 2)
            assert.equal(result, 4)
        })

        it('Expected result 12 FAIL', function () {
            let result = mul(2, 2)
            assert.equal(result, 6)
        })

    })


    describe('Div', function () {

        it('Expected result 5 PASS', function () {
            let result = div(40, 2)
            assert.equal(result, 20)
        })

        it('Expected result 2 FAIL', function () {
            let result = div(40, 5)
            assert.equal(result, 9)
        })

    })

})
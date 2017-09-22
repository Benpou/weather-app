// Test for asyncAdd
const expect = require('expect');
const callbacks = require('../playground/callbacks');

it('should return add with async callback', (done) => {
    callbacks.asyncAdd(2, 3, (sum) => {
        expect(sum).toBe(5);
        done();
        })
})
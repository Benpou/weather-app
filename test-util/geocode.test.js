const expect = require('expect');
const geocode = require('../geocode/geocode');

it('should add two number', () => {
    var results = geocode.add(3, 10);

    expect(results).toBe(13);
});


// it('should forcast fail', () => {
//
//     request({
//         url: `https://api.darksky.net/forecast/e9734bda547aa4d2c944c22bcabae074/${1000},${2000}`,
//         json: true
//         }, (error, response, body) => {
//         if (error) {
//         callback('There is an ERROR on URL !');
//         } else {
//         callback(undefined, body.currently.temperature);
//         }
//     });
//
//




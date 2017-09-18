const request = require('request');


var geocodeAddress = function (address, callback) {

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('There is an ERROR on URL !');
            return null;

        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address');
            return null;

        } else if (body.status === 'OK') {
            var location = {
                'lat': body.results[0].geometry.location.lat,
                'lng': body.results[0].geometry.location.lng,
                'Area': body.results[0].address_components[1].short_name
            }
            callback(undefined, location);
            //console.log(JSON.stringify(location, undefined, 2));
            //console.log(location);
        }
    });
};



module.exports.geocodeAddress = geocodeAddress;
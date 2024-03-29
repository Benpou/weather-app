const yargs = require('yargs');

const geocode = require('./geocode/geocode');


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
        .help()
        .alias('help', 'h')
        .argv

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(results, undefined, 2));
        geocode.forcast(results.lat, results.lng, (error, temp) => {
            if (error) {
                console.log(error);
            } else {
                console.log(temp);
            }
        });
    }
});


//temp = '';
//console.log(geocode.forcast(temp));










console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback')
}, 2000)


setTimeout(() => {
    console.log('second timeout');
}, 000);
console.log('Finish the app');



var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'ken'
    };
    // callback(user);
    setTimeout(() => {
        callback(user);
}, 3000);
};

getUser(23, (userObject) => {
    console.log(userObject);
})



module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};


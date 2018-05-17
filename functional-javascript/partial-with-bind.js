
function bind_test(namespace){
    return console.log.bind(console, namespace);
    // return console.log.bind(console, namespace);
}

module.exports = bind_test ;
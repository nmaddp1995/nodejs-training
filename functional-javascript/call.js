// // var object = {
// //     quack : true
// // }

// var object = Object.create(null);
// object.quack = true ;
// console.log(object.quack);
// console.log(Object.getPrototypeOf(object) === null) ;

// // console.log(object.hasOwnProperty('quack'));
// console.log(Object.prototype.hasOwnProperty.call(object,'quack'));


function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
      return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
  }
  
  module.exports = duckCount
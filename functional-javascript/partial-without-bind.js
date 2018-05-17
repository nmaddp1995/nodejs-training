// var person = {
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// var person1 = {
//     firstName: "Mary",
//     lastName: "Doe",
// }
// var x = person.fullName.apply(person1);
// console.log(person.fullName.apply(person1));
// console.log(person.fullName);


var args = Array.prototype.slice.call(arguments) ;
function logger(namespace){
    return function(){
        console.log.apply(console, [namespace].concat(args));
    }
}
module.exports = logger
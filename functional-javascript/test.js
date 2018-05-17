var spy = require('./spy.js');

spy = spy(console,'error');
console.error('calling console.error');
console.error('calling console.error');
console.error('calling console.error');

console.log(spy.count);
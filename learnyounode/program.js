var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFileSync(path);
var data = buf.toString();
var list_data = data.split('\n');

console.log(list_data.length-1);

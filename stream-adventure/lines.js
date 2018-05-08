var through = require('through2');
var split = require('split');
var stream = through(write);
var line = 1;
function write(buffer, encoding, next) {
    var data = buffer.toString();
    if ((line % 2)== 1) {
        data = data.toLowerCase()+'\n';
    } else {
        data = data.toUpperCase()+'\n';
    }
    this.push(data);   
    line++;
    next();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
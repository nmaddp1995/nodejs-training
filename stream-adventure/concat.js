var concat = require('concat-stream');

process.stdin.pipe(concat(function(buffer){
    var data = buffer.toString().split('').reverse().join('')+'\n';
    process.stdout.write(data);
}));
var through = require('through2');
var stream = through(write);

function write(buffer,endcoding,next){
    var data = buffer.toString().toUpperCase();

    this.push(data);
    next();
}

// function end(){
//     done();
// }

process.stdin.pipe(stream).pipe(process.stdout);


// var through = require('through2');
//   var tr = through(function (buf, _, next) {
//       this.push(buf.toString().toUpperCase());
//       next();
//   });
//   process.stdin.pipe(tr).pipe(process.stdout);
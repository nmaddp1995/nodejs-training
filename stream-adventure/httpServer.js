var http = require('http');
var through = require('through2');
var url = require('url');
var port = process.argv[2];
var server = http.createServer(function(req,res){
    
    if(req.method==='POST'){
        var stream = through(write);
        req.pipe(stream).pipe(res);
    } 
   
});
function write(buffer,endcoding,next){
    var data  = buffer.toString().toUpperCase();
    this.push(data);
    next();
}
server.listen(port);
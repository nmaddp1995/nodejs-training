http = require('http');
var url = process.argv[2];
var content="" ;
http.get(url,function(res){
    
    res.setEncoding('utf8');
    res.on('data',function(data){
        content+=data;
    });
    res.on('end',function(){
        console.log(content.length);
        console.log(content);
    })
   });
// console.log(content.toString);
var fs = require('fs');

var path = process.argv[2];
fs.readFile(path,function(err,data){
    
    var content = data.toString();
    var numberOfNewLine = content.split('\n').length - 1 ; 
    console.log(numberOfNewLine);
});

var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir,function(err,data){
    if(err){
        return console.log(err);
    } else {
        for(var i = 0;i<data.length;i++){
            file = data[i].split('.');
            if(file[1]==ext) {
                console.log(data[i]);
            }
        }
    }
});
var fs = require('fs');
var listFileTrue=[];
module.exports = function(dir,ext,callback){
    fs.readdir(dir,function(err,listFile){
        if(err) {
            return callback(err);
        } else {
            for(var i=0;i<listFile.length;i++){
                var fileExt = listFile[i].split('.')[1];
                if(fileExt == ext){
                    listFileTrue.push(listFile[i]);
                }
            }
            // callback(null,listFileTrue);
        }
        callback(null,listFileTrue);
    });
}
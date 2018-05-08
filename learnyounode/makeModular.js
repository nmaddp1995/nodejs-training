var filter = require('./myModular.js');
var dir = process.argv[2];
var ext = process.argv[3];
filter(dir,ext,function(err,data){
    if(err) {
        return console.log(err);
    } else {
        // console.log("123");
        for(var i=0;i<data.length;i++){
            console.log(data[i]);
        }
      
    }
});
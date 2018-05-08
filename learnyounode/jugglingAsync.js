var http = require('http');
var bl = require('bl');
var count = 0;
var content=[];
for(let i=0;i<=2;i++){
    // getHttp(i);
    http.get(process.argv[i+2],function(res){
        res.pipe(bl(function(err,data){          
            if(err) 
                return console.log(err);
            content[i] = data.toString();
            //console.log(content);
            
            // content.push(data.toString());
            count ++;
            if(count==3){
                for(let j=0;j<=2;j++){
                    console.log(content[j]);
                }
                // console.log(content);
            }
            
            
        }))
    });
    
}




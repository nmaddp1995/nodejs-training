var f = process.argv[2];
var num = process.argv[3];


function repeat(f,num){
    for (let i=0;i<num;i++){
        f();
    }
};

module.exports = repeat ;
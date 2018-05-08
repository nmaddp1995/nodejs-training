var tmp = function test1(){
    var a = 1;
    console.log("a1: "+a);
    var tmp2 = function test2(){
        var a =2 ;
        console.log("a2: "+a);
    }();
}

tmp();
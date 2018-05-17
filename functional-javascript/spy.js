function Spy(target,method){
    var count = 0 ;
    

    return {
        count : count 
    };
}

module.exports = Spy;
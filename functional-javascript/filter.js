function getShortMessage(input){
    return input.filter(function(obj){
        return obj.message.length<50
    }).map(function(obj){
        return obj.message
    })
}




// function getShortMessages(input){
//     var result =[];
//     for(let i=0;i<input.length;i++){
//         if(input[i].message.length < 50){
//             result.push(input[i].message);
//         }
//     }
//     return result;
// };

module.exports = getShortMessage;
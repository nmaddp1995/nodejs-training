function countWords(inputWords){
    return inputWords.reduce(function(acc,curr){
        if(!acc[curr]) {
            acc[curr] = 1 ;
        } else {
            acc[curr]++;
        }
        return acc ;
    },{})

}


module.exports = countWords;
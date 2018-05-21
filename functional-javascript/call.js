function duckCount(){
  var count = 0 ;
  var args = Array.prototype.slice.call(arguments); 
  console.log(args[1]);
  console.log(args.length);
  
  count =  args.filter(function(item){
    return Object.hasOwnProperty.call(item,"quack");
  }).length;
  // for (let i=0;i<args.length;i++){
  //   if(Object.hasOwnProperty.call(args[i],"quack")) count ++;
  // }
  console.log(args);
  return count ;
}

module.exports = duckCount ; 
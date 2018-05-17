module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(acc, item, index, arr) {
      acc.push(fn.call(thisArg, item, index, arr))
      return acc
    }, [])
  }

// module.exports = function arrayMap(arr,fn){
//     return arr.map(function(item){
//         return item*3;
//     })
// }
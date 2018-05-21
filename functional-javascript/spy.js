function Spy(target,method){
    var spy = {
        count: 0
    }

    let oldMethod = target[method]
    
    target[method] = function () {
        spy.count++;       
        oldMethod.call(target, ...arguments);
    }

    return spy
}

module.exports = Spy;
var net = require('net');
var port = process.argv[2];




var server = net.createServer(function(socket){
    var date,year,month,day,hour,minute;
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth()+1;
    day = date.getDate();
    hour = date.getHours();
    minute = date.getMinutes();
    if(day<10) day = "0"+day.toString();
    if(month<10) month = "0"+month.toString();
    var str = year +"-"+month+"-"+day+" "+hour+":"+minute+"\n";
    // socket.write(str);
    // socket.end();
    socket.end(str);
});
server.listen(port);
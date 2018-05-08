var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
     console.log(url.parse(req.url, true));
    var path = url.parse(req.url, true).path;
   
    var data;    
    var content = path.split('=')[1].split('T')[1].split(':');
    var dayMonthYear = path.split('=')[1].split('T')[0];
    var year = dayMonthYear.split('-')[0];
    
    var month = dayMonthYear.split('-')[1]-1;
    var day = dayMonthYear.split('-')[2];
    console.log(year+" "+" "+month+" "+day);    
    var hour = Number(content[0]) + 7;
    var minute = Number(content[1]);
    var second =  Number(content[2].split('Z')[0].split('.')[0]);   
    var ms = Number(content[2].split('Z')[0].split('.')[1]);
    console.log(second+" "+ms);
    // console.log(path.split('/'));
    if (path.split('/')[2].split('?')[0] == "parsetime") {
     
        var standardTime = {
            hour: hour,
            minute: minute,
            second: Number(second)
        };
        data = JSON.stringify(standardTime);
    } else {
        console.log(path);
        var date = new Date(year,month,day,hour,minute,second,ms);
        console.log(date);
        var time = date.getTime();
        var unixTime = {
            unixtime: time
        }
        data = JSON.stringify(unixTime);
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
server.listen(port);
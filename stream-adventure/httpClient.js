var request = require('request');
var http = require('http');

var r = request.post('http://localhost:8099');
process.stdin.pipe(r).pipe(process.stdout);
const fs = require("fs");
const http=require('http');
let server=http.createServer(function(req,res){
    fs.readFile('calc.js','utf8',function(err,data){
    res.writeHead(200,{"content-type":'text/html'})
    res.write(data);
    return res.end();
    })
})
server.listen(8080,function(){
    console.log('running');
})

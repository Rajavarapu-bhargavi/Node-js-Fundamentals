const http=require("http");
var url=require('url');
let server=http.createServer(function(req,res){
    res.writeHead(200,{"content-type":'text|html'});
    var q=url.parse(req.url,true).query;
    var txt=q.year+" "+q.month;
    res.end(txt);
})
server.listen(8080,function(){
    console.log('running');
})
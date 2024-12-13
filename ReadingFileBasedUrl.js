const http=require('http');
const fs=require('fs');
const url=require('url');
const server=http.createServer(function(req,res){
    let q=url.parse(req.url,true);
    let filename='.'+q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{"content-type":'text/html'})
            res.write('error occured');
            res.end();
        }
        else{
            res.writeHead(200,{"content-type":'text/html'})
            res.write(data);
            res.end();
        }
    })
})
server.listen(8080,()=>{
    console.log('running');
})
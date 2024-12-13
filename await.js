const http=require('http');
const fs=require('fs');
let server=http.createServer(function(req,res){
    async function readingFile(){
        await fs.readFile('add.js','utf8',function(err,data){
            if(err){
                res.writeHead(404,{"content-type":'text/html'})
                res.write('error occured');
                res.end();
            }
            else{
                res.writeHead(200,{"content-type":"text/html"})
                res.write(data);
                res.end();
            }
            
        })
    }
    })
server.listen(8080,()=>{
    console.log('running');
}) 
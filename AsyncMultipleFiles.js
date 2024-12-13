const fs=require('fs');
const http=require('http');
const server=http.createServer(function(req,res){
    async function readMultipleFiles(){
        try{
            const[data1,data2]=await promise.all([
                fs.readFile('add.js','utf-8',function(err,data){
                    res.writeHead(200,{"content-type":"text/html"})
                    res.write(data)
                }),
                fs.readFiile('calc.js','utf-8',function(err,data){
                    res.writeHead(200,{"content-type":"text/html"})
                    res.write(data)
                    res.end()
                })
            ])    
           }
           catch(err){
            console.err(error);
           }
    }
})
server.listen(8080,()=>{
    console.log("running")
})
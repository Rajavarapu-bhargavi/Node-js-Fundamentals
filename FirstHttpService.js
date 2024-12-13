var http=require('http');
const server=http.createServer(function(req,res){  
    res.write("This is my First HTTP Service example");
    res.end();
    //res.end("This is also an alternative one")
})
server.listen(8082,()=>{
    console.log("Server listen on 8082")
})
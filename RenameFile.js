const fs=require('fs');
fs.rename('adding.js','add.js',function(){
    console.log("file renamed");
})
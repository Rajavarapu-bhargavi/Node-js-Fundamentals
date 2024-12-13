const fs=require('fs');
const rs=fs.createReadStream('./add.js');
rs.on('open',function(){
    console.log('file is opened');
})
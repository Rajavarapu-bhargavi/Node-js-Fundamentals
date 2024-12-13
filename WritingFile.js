const fs=require('fs');
fs.writeFile('calc1.js',`console.log('over')`,function(err){
    console.log("data saved");
})
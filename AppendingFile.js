const fs=require("fs");
fs.appendFile('calc.js','console.log("over")',function(err){
    console.log('data saved');
})

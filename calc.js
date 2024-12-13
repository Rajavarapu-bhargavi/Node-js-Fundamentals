function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b;
}
//we can skip the add
//we can skip the module because by default module.exports=exports;
module.exports.add=add;
module.exports.sub=sub;
console.log("over")
console.log("over")
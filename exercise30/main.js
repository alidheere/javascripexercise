

function operate(x,y, callback){
return callback(x,y)
}


function add(x,y){
    return x+y
}
function sub(x,y){
    return x-y
}
function multiplay(x,y){
    return x*y
}
function divide(x,y){
    return x/y
}

console.log("additin", operate(5,5, add));

console.log("subtratc", operate(50,30, sub));

console.log("multiplay", operate(20,5, multiplay));

console.log("divide", operate(50,10, divide));

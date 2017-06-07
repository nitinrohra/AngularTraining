var speak = function(){
    console.log("Hello");                   //Declaration type 1
}

function talk(){
    console.log("talk")                     //Declaration type 2
}

console.log("Function Declaration type 1",speak)
console.log("Function Declaration type 2",talk);
speak();
talk();
var sum = function(a,b){
    return a+b;
}
console.log("Sum func(2,3)",sum(2,3))        //Nesting of Function
console.log(("helloworld").split("w"))       //Chain+Nesting of Function
function calc(fx,a,b){                       //Callback func(func inside func)
    return fx(a,b)
}
console.log("Callback funtion(sum inside calc)",calc(sum,2,3));
setTimeout(function(){console.log("Hello")},2000);     //anonymous function used

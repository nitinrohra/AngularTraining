angular.module("demo",[]).controller("firstctrl",firstctrl)
.controller("secondctrl",secondctrl)
function firstctrl($scope){
    console.log("Hello");
    var first=this;
    var a=5;                     //Will not be visible in html
    this.b=6;                    //Will be visible in html
    $scope.c=7;                 //Will be visible in html


var sum=function(a,b){
    console.log(a+b)
}
}
function secondctrl(){
    this.b="abc"
}
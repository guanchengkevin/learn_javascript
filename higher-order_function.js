// higher-order function 

function add ( x,y,f ) {
    return f(x)+f(y); 
}

console.log( add(-1,-10,Math.abs)); 

//map的函数只能接受一个变量，对数组的每一个变量都执行这个操作,返回新数组,旧数组不发生改变！

function pow( x ) {
    return x*x; 
}
var array1 = [1,2,3,4,5]; 
var results1 = array1.map( pow) ; 
for ( var i=0; i<array1.length; i++ ) 
    console.log(" "+results1[i]); 

var add = function(x,y) {
    return x+y; 
}
var results2 = array1.reduce(add); 
console.log( results2);     
console.log( "map "+array1 ) ; 


// reduce接受两个数组，递归式
var connect = function( x,y ){
    return x*10+y; 
}
var connect2 = function( x,y ) {
    return x+y;
}
console.log( array1.reduce(connect) ) ; 

var string2int = function(str,connect){
    var numbers = []; 
    for ( var i=0 ; i<str.length; i++ ) numbers[i] = str[i]; 
    return numbers.reduce(connect); 
}

console.log( string2int("9876",connect2) ); 

var lowerOther = function( str ) {
    return str.substring( 0,1 ).toUpperCase()+str.substring(1).toLowerCase(); 
}; 

console.log( lowerOther("asfAA")); 


// filter 接受函数(只能返回true或者false)， x是当前元素，index是下标，self是数组变量
var arr = ['a','b','c']; 
var f = arr.filter( function(element,index,self){
    console.log( self+" "+index+""+element ) ; 
    return true; 
} ); 
var arr_duplicate = [10,20,30,10,20]; 
var after_duplicate = arr_duplicate.filter( function( x ,index,self ) {
    return index == self.indexOf( x ) ; 
});
console.log( after_duplicate ); 


//sort函数会对当前数组排序！
var sort_arr = [6,1,6,1,47,296,1,6,47,1,6,1]; 
sort_arr.sort( function(x,y){
    if ( x<y ) return -1 ; 
    else return 1; 
} ) ; 
console.log(sort_arr); 

function* fib(length) {
    var a = 0 ; 
    var b = 1 ; 
    for (var i=0; i<length; i++ ) {
        yield a; 
        [a,b] = [b,a+b];     
    }
    return 1000; 
}

var obj; 
var test = fib( 5 ) ; 

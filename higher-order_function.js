// higher-order function 

function add ( x,y,f ) {
    return f(x)+f(y); 
}

console.log( add(-1,-10,Math.abs)); 

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
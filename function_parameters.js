// window 关键字   所有的全局变量都会绑定在window上面！
// const 来定义常量 

function rest_sum( a,b,...rest) {
    var sum = 0 ; 
    for (var i=0; i<arguments.length; i++ ) 
        sum += arguments[i]; 
    return sum; 
}

var numbers = [1,2,3,4,5,6]; 
console.log( rest_sum(1,2,3,4) ); 


// js特点 会将所有的定义语句提前！
// 但是在我电脑里并没用

function head_test () {
    var s = 'Hi '; 
    var sum = s+x; 
    var x = ' kevin ';
    return sum; 
}
console.log( head_test() ) ; 



//添加命名空间  let 可以声明一个块级作用域的变量  
var jack = {}; 
jack.f = function(x) {
    return x*10; 
}
console.log( jack.f(1) ) ; 
// 解构赋值 
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];

//1 自动赋值  2 undefined 3 括号 4 更改名字

var person {
    name : "kevin",
    age : 20,
    gender:man ,
    address: {
        city:"qingdao",
        area:"huangdao"
    }
}; 

var [name,age:agea,address:{city,area}] = person;  
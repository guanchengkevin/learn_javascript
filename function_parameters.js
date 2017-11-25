'use strict'

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
var [name,age,sex] = ['jack','21','male']; 
console.log( 'name '+name+" age = "+age+" sex = "+sex); 

//对象的解构赋值

var student = {
    id:1,  //不能使用前导零 
    name:'young',
    age:21,
    college:'qdu'
}; 
var {id,name,college:school,s:major="software engeneering"} = student; 
console.log('school = '+school + " major = "+major); 

//不同名称变量之间的赋值 
var {hostname:domain,pathname:path} = location; 
console.log(domain+" ** "+path); 


//函数的解析赋值 
function date( { year=2010,month=11,day=11} )  {
    return year+"/"+month+"/"+day; 
}; 
console.log( date( {year:22,month:22} ) ); 


//js里面 一定要严格的 指向 ！
var university = {
    address:"qingdao ",
    name :"niit ",
    getAddress:function() {
        return this.address; 
    }
}; 

console.log( university.getAddress); 



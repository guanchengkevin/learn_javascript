var list = [0,1,2,3]; 
var list2 = new Array(10,11,12,13); 
var person = {
    name:'jack',
    age:12
}; 

alert(person.name+person.age);

var arr = new Array('jack','young','oliver','francis'); 
arr.length;
alert(" length :"+arr.length);
arr.indexOf();
arr.pop();
arr.push('李龙飞');

var list_all = list.concat(list2); 
alert(list_all.join('-')); 

arr.sort();
var str = 'Welcome ${arr[0]},${arr[1]}!';
alert(str);

var m1 = new Map(); 
m1.set('jack',1000); 
m1.set('oliver',1002); 
m1.set('young',2000); 
m1.get('young'); 
m1.delete('young'); 
m1.has('jack'); 



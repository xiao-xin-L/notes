// var a = 1;
// var a = 2;
// var a = 3;
//
// if (a == 1 && a == 2 && a == 3) {
//     console.log("哈哈");
// }

// let obj = {
//     0: 9,
//     1: 3,
//     2: 4,
//     length: 3,
//     // push: Array.prototype.push
// }
// console.log(obj);
// Array.prototype.push.call(obj, 1)
// Array.prototype.push.call(obj, 5)
// Array.prototype.push.call(obj, 8)

// obj.push(1);
// obj.push(2);
// obj.push(6);
// obj.push(5);
// console.log(obj);
// console.log(obj[2]);

// var name = "call";
// var C=function(){}
// function A(x, y) {
//     var res = x + y;
//     console.log(res, this.name, x, y);
//     console.log("A");
// }
//
// function B(x, y) {
//     var res = x - y;
//     console.log(res, this.name, x, y);
//     console.log("B");
// }

// B.call(this, 2, 1);
// B.call.call.call(A, A, 3, 3);
// Function.prototype.call(A, 7, 8)
// Function.prototype.call.call.call(A, A, 9, 10);
// C.call.call.call(A, A, 9, 10);

// console.log(Function.prototype.constructor);
// console.log(Object.prototype.constructor);
// console.log(Array.prototype);

// var user = parseInt(prompt("请输入数据:"));
// var fahrenheit;
//
// fahrenheit = 9 / 5 * user + 32;
// console.log(fahrenheit);

// var user = prompt("请输入一个三位数值:");
// while (true) {
//     if (user.length !== 3) {
//         alert("输入的数值不对!!!")
//         user = prompt("请输入一个三位数值:");
//     } else {
//         break;
//     }
// }
//
// var a = user[0],
//     b = user[1],
//     c = user[2],
//     result = parseInt(a) + parseInt(b) + parseInt(c);
// confirm(result);

// 如果今天是星期二，那么1000天后是星期几？用户输入一个天数，计算这个天数后是星期几?
// var date = 2;
// var dateNumber = parseInt(prompt("请输入天数:"));
// var result = dateNumber % 7 + date;
// if (result === 8) {
//     alert(result = 1);
// } else {
//     alert(result);
// }


// var obj = {
//     a : function(){
//         console.log(this, 1);
//         return function(){
//             console.log(this, 4);
//         }
//     },
//     b : () => {
//         console.log(this, 2)
//         return () => {
//             console.log(this, 3);
//         }
//
//     }
// }
//
// obj.a()();
// obj.b()();
// 访问器属性
// var obj = {
//     _year: 2020,
//     edition: 1
// }
// Object.defineProperty(obj, "year", {
//     get: function(){
//         return obj._year;
//     },
//     set: function(value){
//         if(value > 2020){
//             this._year = value;
//             this.edition += value - 2020
//         }
//     },
//     configurable: true,
//     enumerable: true
// })
// // obj.year = 2021;
// console.log(obj.edition);


// let arr = [1, 5, 8, 6, 3, 52, 13, 42];
// let sum = arr.reduceRight(function(pre, fir, index, array){
//     return pre + fir;
// },10)
// console.log(sum);

// var k = 0;
// for(var i=0,j=0;i<10,j<6;i++,j++){
//     k += i + j;
// }
// console.log(k)

// let ul = document.querySelector("ul");
// console.log(ul.childNodes);
// let li = document.querySelector("li");
// console.log(li.className);
// console.log(ul.removeChild(li));
// console.log(li);
// li.classList.add();

// try catch;  with;  eval  可以改变作用域链

// CSSSprite  SVGSprite  Iconfont  base64  优化图片加载

// 置换元素(替换元素): 在不使用css修饰时，元素的标签和属性也会影响元素的显示。
// 常见的置换元素: img  input  textarea  select  object  iframe  canvas

// 非置换元素(不可替换元素): 此外的其他元素都是非置换元素

// let app = document.querySelector("#app");
// console.log(app.offsetLeft);
// console.log(app.offsetTop);

// 算出2~100的所有质数




// let userNumber = parseInt(prompt("请输入任意的整数:"));
// if (userNumber % 5 === 0 && userNumber % 6 !== 0) {
//     console.log("这个数字能被5整除,但是不能被6整除");
// } else if (userNumber % 5 !== 0 && userNumber % 6 === 0) {
//     console.log("这个数字不能被5整除,但是能被6整除");
// } else if (userNumber % 5 === 0 && userNumber % 6 === 0) {
//     console.log("这个数字能被5整除,也能被6整除");
// } else {
//     console.log("这个数字即不能被5整除,也不能被6整除");
// }
console.log(new window.Event("click"));

Object.create(null); // 创造一个空对象, 没有原型对象
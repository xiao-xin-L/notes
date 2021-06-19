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


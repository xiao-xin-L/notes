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
// console.log(new window.Event("click"));

// Object.create(null); // 创造一个空对象, 没有原型对象

// let app = document.querySelector("#app");
// app.style.backgroundColor = "red";


// let text = document.querySelector("input");
// text.addEventListener("textInput", function(ev){
//     console.log("textInput事件:", ev);
//     console.log(text.value);
// })
// text.addEventListener("keydown", function(ev){
//     console.log("keydown事件:", ev);
//
// })

/**
 *  在 then 里面 return Promise.resolve() 会发生什么
 *  需要从 V8 源码解释
 */
// Promise
//     .resolve()
//     .then((data) => {
//         console.log(1);
//         return Promise.resolve(0);
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(2);
//     })
//     .then((data) => {
//         console.log(3);
//     })
//     .then((data) => {
//         console.log(4);
//     })
// Promise
//     .resolve()
//     .then(() => {
//         console.log(5);
//     })
//     .then(() => {
//         console.log(6);
//     })
//     .then(() => {
//         console.log(7);
//     })
//     .then(() => {
//         console.log(8);
//     })

// 1 5 6 7 0 2 8 3 4


// let o1 = {
//     name: "zhangyihua",
//     age: 18,
//     say: function (num1, num2) {
//         return num1 + num2 + this.age;
//     }
// }
//
// let o2 = {
//     name: "zhaoxiaoyi",
//     age: 20,
//     say: function () {
//         return this.age;
//     }
// }
//
// var age = 10;
//
// console.log(o1.say.call(null, 10, 10));

// 面向对象

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//
//
// }
// Person.prototype = {
//     constructor: Person,
//     sayHello: function(){
//         return "Hello";
//     }
// }
// let person = new Person();
// console.log(Object.getPrototypeOf(person));

// Person.prototype.name = "嗯嗯"
//
// Person.prototype.sayHello = function(){
//     return "Hello";
// }
//
// let person = new Person("哈哈", 18);
//
// console.log(person.name);
// console.log(person.__proto__.name);
//
// Person.prototype.name = "嘻嘻"
//
// console.log(person.__proto__.name);


// call and apply and bind

// let obj1 = {
//     name: "obj1",
//     fn1(){
//         return "fn1";
//     }
// }
//
// let obj2 = {
//     name: "obj2",
//     fn2(){
//         return "fn2";
//     }
// }
//
// let obj3 = obj1.fn1.bind(obj2);
// console.log(obj3());
//
//
// let obj4 = {
//     name: "obj4",
//     fn4(name){
//         return this.name;
//     }
// }
//
// let obj5 = obj4.fn4.call(obj1, "123");
//
// console.log(obj5);

// 6种模式
// 工厂模式, 构造函数模式, 原型模式, 组合模式(构造函数和原型), 寄生式构造函数模式, 稳妥式构造函数模式

// 第一种, 工厂模式
function person(name, age, sex, company) {
    let o = {};
    o.name = name;
    o.age = age;
    o.sex = sex;
    o.company = company;
    o.sayHello = function () {
        return "Hello";
    }
    return o;
}

// 第二种, 构造函数模式
function Person(name, age, sex, company) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.company = company;
    this.sayHi = function () {
        return "Hi"
    }
}

// 第三种, 原型模式
function Person1() {
}

Person1.prototype.sex = 18;
Person1.prototype.sayGood = function () {
    return "Good";
}

// 第四种, 组合模式, 最常用的模式
function Person2(name, age) {
    this.name = name;
    this.age = age;
}

Person2.prototype.sex = 20;
Person2.prototype.sayGoodbye = function () {
    return "Good";
}

// 第五种, 寄生式构造函数模式(与工厂模式几乎一模一样, 只不过一个是对象字面量, 一个是通过new创建的对象)(能不用这种模式尽量不用)
// new 一个对象的写法
function Person3(name, age, sex, company) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.sex = sex;
    o.company = company;
    o.sayPerson3 = function () {
        return "Person3";
    }
    return o;
}

// new 一个数组的写法
function Person4(name, age) {
    let a = new Array();
    a.name = name;
    a.age = age;
    a.sayArray = function () {
        return "Array"
    }
}

// 第六种, 稳妥式构造函数(一种用在安全环境的模式, 禁止用this和new)
function Person5(name, age, sex, company) {
    let arr = new Array();
    arr.sayName = function () {
        console.log(name);
    }
    arr.sayAge = function () {
        console.log(age);
    }
    arr.saySex = function () {
        console.log(sex);
    }
    arr.sayCompany = function () {
        console.log(company);
    }
}

// 伪造对象 (call, apply, bind返回函数) (改变this指向)

// 4种继承
// 组合式继承, 原型式继承, 寄生式继承, 寄生组合式继承

// 第一种, 组合式继承 (伪经典继承) (原型链和构造函数的组合)
function SuperType(name) {
    this.name = name;
}

SuperType.prototype.sayName = function () {
    return this.name;
}

function SubType(name, age) {
    // 继承属性
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    return this.age;
}
let subType = new SubType("哈哈", 20);
// console.log(subType.sayAge());

// 第二种, 原型式继承 (只继承引用类型数据)
function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

let author = {
    name: "XIaoXin",
    girlFriends: ["zhangyihua", "zhaoxiaoyi", "shiyuanlimei", "jintianmeiying"]
}
let author1 = object(author);
author1.name = "xinXIao"; // 无法修改原型上的基础类型数据, 直接添加在自身对象上
author1.girlFriends.push("xiaozhifenghua"); // 能够操作原型上引用类型数据
let author2 = object(author);
author2.name = "haha";
author2.girlFriends.push("linjiaxin");

// console.log(author1);
// console.log(author2);

// 第三种, 寄生式继承
function obj(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

// 封装一个仅用于继承过程的函数
function createAuthor(origin) {
    // 创建对象
    let author = obj(origin);
    // 通过某种方式增强对象
    author.sayHi = function () {
        return "Hi";
    }
    return author;
}

function Per(name, age) {
    this.name = name;
    this.age = age;
}

let newAuthor = createAuthor(new Per("xiaoxin", 20))
// console.log(newAuthor);

// 第四种, 寄生组合式继承 (最理想的继承)
function object1(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

function inheritPrototype(subType1, superType1) {
    let prototype = object1(superType1.prototype);
    prototype.constructor = subType1;
    subType1.prototype = prototype;
}

function SuperType1(name) {
    this.name = name;
    this.color = ["red", "green", "blue"]
}

SuperType1.prototype.sayName = function () {
    console.log(this.name);
}

function SubType1(name, age) {
    SuperType1.call(this, name);
    this.age = age;
}

inheritPrototype(SubType1, SuperType1);
SubType1.prototype.sayAge = function () {
    console.log(this.age);
}

let subType1 = new SubType1("xiaoxin", 20);

// console.log(subType1);


// 高级函数

// 1. 递归
// 2. 闭包
// 3. 高阶函数
// 4. 函数柯理化
// function addCurrying(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
//
// addCurrying(1)(2)(3)
//
// // 相当于以下
//
// function currying(a, b, c) {
//     return a + b + c;
// }
//
// currying(1, 2, 3);

// 柯理化通用函数 (函数的length是形参的个数)
// function createCurrying(func, args) {
//     let arity = func.length; // 形参个数
//     var args = args || []; //
//
//     return function () {
//         let _args = [].slice.call(arguments);
//         Array.prototype.unshift.apply(_args, args);
//         if (_args.length < arity) {
//             return createCurrying.call(null, func, _args);
//         }
//
//         return func.apply(null, _args);
//     }
// }


// let ob = {
//     per: function (fn) {
//         // console.log(this); // ob
//         return function () {
//             console.log(this); // window
//         }
//     }
// }
//
// console.log(ob.per()());

// var bj = 10;
//
// function Add() {
//     console.log(this);//Add{}
// }
// Add.prototype.bj = 10;
// Add.prototype.say = function () {
//     console.log(this);//Add{}
//     return function () {
//         console.log(this);//window
//     }
// }
// var obje = new Add;//没传参数可以省略括号
// obje.say()();


// 数组方法的封装
// es5数组方法: push, pop, unshift, shift, sort, reverse, join, every, some, filter, map, forEach, reduce, reduceRight, indexOf, lastIndexOf
// es6数组方法: Array.from, Array.of, copyWithin, find, findIndex, fill, entries, keys, values, includes, flat, flatMap,


// es5字符串方法: chatAt, chatCodeAt, codePointAt, String.fromChatCode, subStr, subString, slice, splice, indexOf, lastIndexOf,
// concat, match, matchAll, repeat, replace, replaceAll, search, split, toLocaleUpperCase, toLocaleLowerCase, toUpperCase, toLowerCase
// trim, trimLeft, trimRight, trimStart, trimEnd, String.raw, startsWith, endsWith, padStart, padEnd
// locale 语言环境, 在方法中有这个单词的, 是针对地区的写法


// 字符串和数组的相同方法: slice, splice, indexOf, lastIndexOf, concat

// symbol数据类型的方法: Symbol.for, Symbol.keyFor, description(属性), [Symbol.hasInstance], [Symbol.isConcatSpreadable],


// let obj10 = {
//
//     str:()=>{
//         let str =0
//         console.log(this)
//         return this
//     }
// }
// console.log(obj10.str());

//
// let obj2 = {
//     str: "obj2",
//     fn(){
//         let fn2=()=>this.str;
//         console.log(fn2());
//         return {
//             fn1: ()=>this.str
//         }
//     }
// }
// console.log(obj2.fn().fn1());


// let el = document.querySelector("#div1");
// let myWeakMap = new WeakMap();
//
// myWeakMap.set(el, {count: 0});
// console.log(el);
// let el1 = myWeakMap.get(el)
// console.log(el1.count);


function* Generator() {
    yield "1";
    yield "2"
}
let g = Generator();

// 用户输入一个数字n，计算1+2+3+4+……n的和。
// let userNumber = parseInt(prompt("请输入数字"));
function add(n) {
    if (n === 1) {
        return 1;
    }
    return n + add(n - 1);
}
add(100);

// 用户输入一个数字n, 计算3/2+...+n+1/n
// let userNum = parseInt(prompt("请输入数字"))
// function addN(n){
//     if (n === 1){
//         return 3/2;
//     }
//     if ()
//     return (n+1)/addN(n)
// }
// addN(userNum);


//编写一个函数rev用于将一个整数前后倒置。
// 例如rev(12345)将返回54321，rev(123)将返回321

function reverseNumber(n) {
    let str = n.toString().split("");
    str = str.reverse();
    str = str.join("");
    let newN = parseInt(str);
    return newN;
}

// 写一个函数实现加法计算机
function accumulate() {
    let result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

// 定义一组函数,输入数字,逆转并输出汉字形式
function toChinece(n) {
    let arr = n.toString().split("");
    arr = arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "0":
                arr[i] = "零";
                break;
            case "1":
                arr[i] = "壹";
                break;
            case "2":
                arr[i] = "贰";
                break;
            case "3":
                arr[i] = "叁";
                break;
            case "4":
                arr[i] = "肆";
                break;
            case "5":
                arr[i] = "伍";
                break;
            case "6":
                arr[i] = "陆";
                break;
            case "7":
                arr[i] = "柒";
                break;
            case "8":
                arr[i] = "捌";
                break;
            case "9":
                arr[i] = "玖";
                break;
        }
    }
    return arr.join("");
}


// 用户输入一个三位数，弹出各个数位的和：
// 比如:用户输入155，就弹出11 用户输入316，就弹出10 用户输入989，就弹出26 用户输入678，就弹出21

// let num = parseInt(prompt("请输入一个三位数"));
// let result = 0;
// while (true) {
//     let strNum = num.toString();
//     if (strNum.length !== 3) {
//         alert("输入有误,请重新输入");
//         num = parseInt(prompt("请输入一个三位数"));
//     } else {
//         break;
//     }
// }
// for (let i = 0; i < strNum.length; i++) {
//     result += parseInt(strNum[i]);
// }
// alert(result);


// 100~999之内，只有4个水仙花数，请编程找出来。
// let arr = [];
// for (let i = 100; i <= 999; i++) {
//     let strI = i.toString();
//     let singleStr = strI[0] * strI[0] * strI[0] + strI[1] * strI[1] * strI[1] + strI[2] * strI[2] * strI[2]
//     if (singleStr === strI) {
//         arr.push(strI);
//         console.log(singleStr);
//     }
//     // console.log(strI);
// }
// console.log(arr);



// 图片加载

// function loadImage(path) {
//     let img = new Image();
    
// }

// 箭头函数调用bind会不会报错?????(竟然还需尝试!!!)
// let func = (a) => {
//     console.log(a);
//     console.log("箭头函数")
// }

// function foo(b){
//     console.log(b);
//     console.log("普通函数")
// }

// let newFn = func.bind(foo, 1);

// console.log(newFn());
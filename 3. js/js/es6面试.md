1、es5和es6的区别，说一下你所知道的es6

    ECMAScript5，即ES5，是ECMAScript的第五次修订，于2009年完成标准化ECMAScript6，即ES6，是ECMAScript的第六次修订，于2015年完成，也称ES2015ES6是继ES5之后的一次改进，相对于ES5更加简洁，提高了开发效率ES6新增的一些特性：
    1）let声明变量和const声明常量，两个都有块级作用域ES5中是没有块级作用域的，并且var有变量提升，在let中，使用的变量一定要进行声明
    2）箭头函数ES6中的函数定义不再使用关键字function()，而是利用了()=>来进行定义
    3）模板字符串模板字符串是增强版的字符串，用反引号（`）标识，可以当作普通字符串使用，也可以用来定义多行字符串
    4）解构赋值ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值
    5）for of循环for...of循环可以遍历数组、Set和Map结构、某些类似数组的对象、对象，以及字符串
    6）import、export导入导出ES6标准中，Js原生支持模块(module)。将JS代码分割成不同功能的小块进行模块化，将不同功能的代码分别写在不同文件中，各模块只需导出公共接口部分，然后通过模块的导入的方式可以在其他地方使用
    7）set数据结构Set数据结构，类似数组。所有的数据都是唯一的，没有重复的值。它本身是一个构造函数
    8）... 展开运算符可以将数组或对象里面的值展开；还可以将多个值收集为一个变量
    9）修饰器 @decorator是一个函数，用来修改类甚至于是方法的行为。修饰器本质就是编译时执行的函数
    10）class 类的继承ES6中不再像ES5一样使用原型链实现继承，而是引入Class这个概念11）async、await使用 async/await, 搭配promise,可以通过编写形似同步的代码来处理异步流程, 提高代码的简洁性和可读性async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成
    12）promisePromise是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理、强大
    13）SymbolSymbol是一种基本类型。Symbol 通过调用symbol函数产生，它接收一个可选的名字参数，该函数返回的symbol是唯一的
    14）Proxy代理使用代理（Proxy）监听对象的操作，然后可以做一些相应事情

2、var、let、const之间的区别

    var声明变量可以重复声明，而let不可以重复声明
    var是不受限于块级的，而let是受限于块级
    var会与window相映射（会挂一个属性），而let不与window相映射
    var可以在声明的上面访问变量，而let有暂存死区，在声明的上面访问变量会报错
    const声明之后必须赋值，否则会报错
    const定义不可变的量，改变了就会报错
    const和let一样不会与window相映射、支持块级作用域、在声明的上面访问变量会报错

3、使用箭头函数应注意什么？

    （1）用了箭头函数，this就不是指向window，而是父级（指向是可变的）
    （2）不能够使用arguments对象
    （3）不能用作构造函数，这就是说不能够使用new命令，否则会抛出一个错误
    （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数
4、ES6的模板字符串有哪些新特性？并实现一个类模板字符串的功能

    基本的字符串格式化。
    将表达式嵌入字符串中进行拼接。
    用${}来界定在ES5时我们通过反斜杠()来做多行字符串或者字符串一行行拼接。
    ES6反引号(``)就能解决类模板字符串的功能

```js
let name = 'web';
let age = 10;
let str = '你好，${name} 已经 ${age}岁了'
str = str.replace(/\$\{([^}]*)\}/g,function(){
     return eval(arguments[1]);
    })
console.log(str);//你好，web 已经 10岁了
```

5、介绍下 Set、Map的区别？

    应用场景Set用于数据重组，Map用于数据储存
    Set：　
    （1）成员不能重复
    （2）只有键值没有键名，类似数组
    （3）可以遍历，方法有add, delete,has
    Map:
    （1）本质上是健值对的集合，类似集合
    （2）可以遍历，可以跟各种数据格式转换

6、ECMAScript 6 怎么写 class ，为何会出现 class？
ES6的class可以看作是一个语法糖，它的绝大部分功能ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法
//定义类
```js
class Point { 
  constructor(x,y) { 
      //构造方法
       this.x = x; //this关键字代表实例对象
       this.y = y; 
  } toString() {
       return '(' + this.x + ',' + this.y + ')'; 
  }
}
```
7、Promise构造函数是同步执行还是异步执行，那么 then 方法呢？
```js
// promise构造函数是同步执行的，then方法是异步执行的
```
8、setTimeout、Promise、Async/Await 的区别
```js
// 事件循环中分为宏任务队列和微任务队列
// 其中setTimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行async函数表示函数里面可能会有异步方法，await后面跟一个表达式
// async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行
```
9、promise有几种状态，什么时候会进入catch？
```js
// 三个状态：
// pending、fulfilled、reject
// 两个过程：
// padding -> fulfilled、padding -> rejected当pending为rejectd时，会进入catch
```
10、下面的输出结果是多少
```js
const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
})

promise.then(() => {
    console.log(3);
})

console.log(4);
// Promise 新建后立即执行，所以会先输出 1，2，而 Promise.then()内部的代码在 当次 事件循环的 结尾 立刻执行 ，所以会继续输出4，最后输出3
```
11、使用结构赋值，实现两个变量的值的交换

```js
let a = 1;let b = 2;
[a,b] = [b,a];
```

12、设计一个对象，键名的类型至少包含一个symbol类型，并且实现遍历所有key

```js
let name = Symbol('name');
 let product = {
    [name]:"洗衣机",    
    "price":799
  };
  Reflect.ownKeys(product);
```
13、下面Set结构，打印出的size值是多少
```js
let s = newSet();
s.add([1]);s.add([1]);
console.log(s.size);
// 答案：2
// 两个数组[1]并不是同一个值，它们分别定义的数组，在内存中分别对应着不同的存储地址，因此并不是相同的值都能存储到Set结构中，所以size为2
```
14、Promise 中reject 和 catch 处理上有什么区别
```js
// reject 是用来抛出异常，catch 是用来处理异常
// reject 是 Promise 的方法，而 catch 是 Promise 实例的方法
// reject后的东西，一定会进入then中的第二个回调，如果then中没有写第二个回调，则进入catch
// 网络异常（比如断网），会直接进入catch而不会进入then的第二个回调
```
15、使用class 手写一个promise
```js
//创建一个Promise的类
  class Promise{
    constructor(executer){//构造函数constructor里面是个执行器
      this.status = 'pending';//默认的状态 pending
      this.value = undefined//成功的值默认undefined
      this.reason = undefined//失败的值默认undefined
      //状态只有在pending时候才能改变
      let resolveFn = value =>{
        //判断只有等待时才能resolve成功
        if(this.status == 'pending'){
          this.status = 'resolve';
          this.value = value;
        }
      }
      //判断只有等待时才能reject失败
      let rejectFn = reason =>{
        if(this.status == 'pending'){
          this.status = 'reject';
          this.reason = reason;
        }
      }    
      try{
        //把resolve和reject两个函数传给执行器executer
        executer(resolve,reject);
      }catch(e){
        reject(e);//失败的话进catch
      }
    }
    then(onFufilled,onReject){
      //如果状态成功调用onFufilled
      if(this.status = 'resolve'){
        onFufilled(this.value);
      }
      //如果状态失败调用onReject
      if(this.status = 'reject'){
        onReject(this.reason);
      }
    }
  }
```
16、如何使用Set去重
```js
let arr = [12,43,23,43,68,12];
let item = [...new Set(arr)];
console.log(item);//[12, 43, 23, 68]
```
17、将下面for循环改成for of形式
```js
let arr = [11,22,33,44,55];
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}
```
答案：
```js
let arr = [11,22,33,44,55];
let sum = 0;
for(value of arr){
    sum += value;
}
```
18、理解 async/await以及对Generator的优势
```js
// async await 是用来解决异步的，async函数是Generator函数的语法糖
// 使用关键字async来表示，在函数内部使用 await 来表示异步
// async函数返回一个 Promise 对象，可以使用then方法添加回调函数
// 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句
// async较Generator的优势：
// （1）内置执行器。Generator 函数的执行必须依靠执行器，而 Aysnc 函数自带执行器，调用方式跟普通函数的调用一样
// （2）更好的语义。async 和 await 相较于 * 和 yield 更加语义化　　
// （3）更广的适用性。yield命令后面只能是 Thunk 函数或 Promise对象，async函数的await后面可以是Promise也可以是原始类型的值
// （4）返回值是 Promise。async 函数返回的是 Promise 对象，比Generator函数返回的Iterator对象方便，可以直接使用 then() 方法进行调用
```
19、forEach、for in、for of三者区别
```js
// forEach 更多的用来遍历数组
// for in 一般常用来遍历对象或json
// for of数组对象都可以遍历，遍历对象需要通过和Object.keys()
// for in循环出的是key，for of循环出的是value
```
20、说一下es6的导入导出模块
20.1 导入通过import关键字
```js
// 只导入一个
import {sum} from "./example.js"
// 导入多个
import {sum,multiply,time} from "./exportExample.js"
// 导入一整个模块
import * as example from "./exportExample.js"
```
20.2 导出通过export关键字
```js
//可以将export放在任何变量,函数或类声明的前面
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
//也可以使用大括号指定所要输出的一组变量
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};
//使用export default时，对应的import语句不需要使用大括号
let bosh = function crs(){}
export default bosh;
import crc from 'crc';
//不使用export default时，对应的import语句需要使用大括号
let bosh = function crs(){}
export {bosh};
import {crc} from 'crc';
```

21.iterator的作用是什么，怎么布置iterator接口。

    1、统一数据结构（数组，对象，map，set，数组包对象，对象包数组）的遍历方式
    2、在数据结构上部署iterator接口:所谓的部署接口表现形式为，给对象或数组等集合增加iterator属性，属性的内容是一个根据iterator接口规范自行实现的方法

22.MIME类型有什么作用

    MIME的全称是Multipurpose Internet Mail Extensions，即多用途互联网邮件扩展类型。这是HTTP协议中用来定义文档性质及格式的标准。服务器通过MIME告知响应内容类型，而浏览器则通过MIME类型来确定如何处理文档。
    
    常见MIME类型：
    
    application/octet-stream?未知的应用程序文件
    
    application/json?json数据
    
    text/plain未知的文本文件（纯文本文件），浏览器会认为这是可以直接显示的
    
    注:?浏览器分辨文件是基于MIME的，而不会把文件打开查看是否是其他类型，例如用link链接了一个标记为text/plain的文件，就算此文件是css文件，就算其后缀是.css,浏览器依旧不认
    
    text/css?css文件
    
    text/html?HTML文件
    
    image/gif?gif文件
    
    常见的还有image/jpeg、image/png、image/svg
    
    很多浏览器支持icon image/x-icon

23.cookie和session的区别
    
    session是区别于数据库存在的一种服务器临时存储技术, 它主要存储一些无需持久化的数据, 比如临时的登录状态信息等
    
    cookie是存在于浏览器上的一种浏览器本地存储的方式, 同域名下的cookie不同标签页可以共享, 默认过期时间是浏览器关闭时, 而且在进行http请求时, 会自动带上浏览器全部的cookie发给后台, 后台也可以获取cookie, 设置可以在响应时, 想浏览器中设置cookie。

24.深拷贝的原理

    Js的深拷贝发生在对象的赋值上，对象赋值的时候仅仅是一个引用赋值，也就是说两个不同变量名指向的是同一份内存空间；基本数据类型则不存在这样的行为；要完成对象的深拷贝需要使用递归遍历所有对象的属性进行赋值，也可以使用JSON.stringfy和JSON.parse操作。


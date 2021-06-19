## sass 详解

1. 什么是css预处理器?

   * 开发一种特殊的编程语言，把css文件作为编译后的结果，我们在这个编程语言上增加了很多程序的特性，使得开发变得更加简单。
   * 当前流行的css预处理器：sass（scss）、less、stylus。

2. 什么是sass？

   * 采用 Ruby 语言编写的一款 CSS 预处理语言，也是最早的 CSS 预处理语言，有最强大的功能，并且书写样式与原生的CSS极为类似，前端开发者学习的成本较低。

3. sass 的安装

   ```js
   // 需要先安装Ruby, 在官网下载安装
   // 安装 sass
   gem install sass
   // 检测 sass 版本
   sass -v
   // 更新 sass
   gem update sass
   ```

4. sass 的编译

   ```js
   // 创建 main.scss为后缀 的文件
   // 编译 sass 文件
   sass ./src/main.scss:./src/main.css
   // 编译后生成两个文件 (main.css和main.css.map)
   // .css.map记录了scss怎么编译成css的, 方便我们后期调试.
   ```

5. sass 的变量

   * 声明变量 $

     ```scss
     // 通过 $ 关键字进行声明
     // 变量的命名规则与js一样
     // 使用驼峰命名法
     $width: 300px;
     $height: 500px;
     ```

   * 普通变量和默认变量

     ```scss
     // 普通变量
     // 定义之后可以在全局范围内使用
     // sass 代码
     $fontSize: 12px;
     body {
         font-size: $fontSize;
     }
     // css 代码
     body {
         font-size: 12px;
     }
     
     // 默认变量
     // 在值的后面加上 !default 即可
     // 默认变量一般是用来设置默认值，然后根据需求来覆盖的。
     // sass 代码
     $baseLineHeight: 1.5 !default;
     body {
         line-height: $baseLineHeight;
     }
     // css 代码
     body {
         line-height: 1.5;
     }
     
     // 覆盖的方式，在默认变量之前重新声明下变量即可。
     // 如果需要覆盖, 需在默认变量前进行声明
     // sass 代码
     $baseLineHeight: 2;
     $baseLineHeight: 1.5 !default;
     body {
         line-height: $baseLineHeight;
     }
     // css 代码
     body {
         line-height: 2;
     }
     ```

   * 变量的调用

     ```scss
     // 变量声明后, 可以在需要的地方进行调用, 也参与各种计算
     // sass 代码
     $baseLineHeight: 2;
     $baseColor: red;
     body {
         line-height: $baseLineHeight - 0.5;
     }
     h1 {
         color: $baseColor
     }
     // 注意: 变量与操作符之间需要用空格隔开, 否则会报错
     // css 代码
     body {
         line-height: 1.5
     }
     h1 {
         color: red;
     }
     ```

   * 全局变量和局部变量

     ```scss
     // 全局变量和局部变量是一个作用域方面的技术点, 其核心理念是可以访问到这个变量的范围。
     // 在最外层定义的变量为全局变量
     // sass 代码
     $color: blue !default; // 定义全局变量
     body {
         color: $color; // 调用全局变量
     }
     em {
         $color: red; // 定义局部变量
         a {
             // 当在局部找不到时, 会往一层一层往外找
             color: $color; // 调用局部变量
         }
     }
     // css 代码
     body {
         color: blue;
     }
     em a {
         color: red;
     }
     ```

   

6. sass 的嵌套

   * 选择器嵌套

     ```scss
     // sass 代码
     nav {
         a {
             color: red;
             header & {
                 color: green;
                 .warp & {
                     color: blue;
                 }
             }
         }
     }
     // css 代码
     nav a {
         color: red;
     }
     header nav a {
         color: green;
     }
     .wrap header nav a {
         color: blue;
     }
     ```

     

   * 样式名嵌套

     ```scss
     // 前缀相同的属性可以进行嵌套
     // sass 代码
     body {
         // 嵌套的样式名后面一定要加:号
         background: {
             image: url("./images/1.jpg");
             repeat: no-repeat;
             color: red;
         }
     }
     // css 代码
     body {
         background-image: url("./images/1.jpg");
         background-repeat: no-repeat;
         background-color: red;
     }
     ```

     

   * 伪类嵌套

     * 当把 & 符号直接置于嵌套的选择器的首部时, 那么效果就是直接将父选择器替换成这个&符号

     ```scss
     // 伪类嵌套需要借助 & 符号一起配合使用
     // sass 代码
     .clearfix {
         &:before,
         &:after {
             content: "";
             display: table;
         }
         &:after {
             clear: both;
             overflow: hidden;
         }
     }
     // css 代码
     .clearfix.before,
     .clearfix:after {
         content: "";
         display: table;
     }
     .clearfix:after {
         clear: both;
         overflow: hidden;
     }
     ```

     

7. sass 的混合宏

   * 混合宏的概念
     * 就是一个可以复用的代码块

   * 混合宏的使用

     ```scss
     // sass 代码
     // 定义混合宏
     @mixin border-radius {
         -webkit-border-radius: 3px;
         border-radius: 3px;
     }
     // 使用混合宏
     button {
         @include border-radius;
     }
     // css 代码
     button {
         -webkit-border-radius: 3px;
         border-radius: 3px;
     }
     ```

     

   * 混合宏的参数

     ```scss
     // 单参数
     // sass 代码
     @mixin baseStyle($radius) {
         border-radius: $radius;
     }
     button {
         @include baseStyle(50%);
     }
     // css 代码
     button {
         border-radius: 50%;
     }
     // 多参数
     // sass 代码
     @mixin baseStyle($width, $height, $radius) {
         width: $width;
         height: $height;
         border-radius: $radius;
     }
     button {
         @include baseStyle(300px, 300px, 50%);
     }
     // css 代码
     button {
         width: 300px;
         height: 300px;
         border-radius: 50%;
     }
     ```

     

8. sass 其他特征

   * 继承

     ```scss
     // 在选择器的样式末尾, 添加一个 @extend, 使得该选择器继承另一个选择器的样式规则
     // sass 代码
     .btn {
         border: 1px solid #ccc;
         padding: 6px 10px;
         font-size: 14px;
     }
     .btn-primary {
         background-color: #f36;
         color: #f63;
         // 将.btn的样式继承到.btn-primary
         @extend .btn;
     }
     .btn-second {
         background-color: #c28;
         color: #c82;
         @extend .btn;
     }
     // css 代码
     .btn,
     .btn-primary,
     .btn-second {
         border: 1px solid #ccc;
         padding: 6px 10px;
         font-size: 14px;
     }
     .btn-primary {
         background-color: #f36;
         color: #f63;
     }
     .btn-second {
         background-color: #c28;
         color: #c82;
     }
     ```

   * 占位符 (%placeholder)

     ```scss
     // 作用: 需要使用的时候就编译, 不需要使用的时候就不编译
     // sass 代码
     %mt5 {
         margin-top: 5px;
     }
     %pt5 {
         padding-top: 5px;
     }
     .btn {
         @extend %mt5;
         @extend %pt5;
     }
     .block {
         @extend %mt5;
         span {
             @extend %pt5;
         }
     }
     // css 代码
     .btn,
     .block {
         margin-top: 5px;
     }
     .btn,
     .block span {
         padding-top: 5px;
     }
     ```

     

   * 插值 #{}

     ```scss
     // 一个类似于js拼接的功能
     // sass 代码
     // 预设属性参数
     $properties: (margin, padding);
     @mixin set-value($side, $value) {
         // 遍历
         @each $prop in $properties {
             // 拼接样式名和值
             #{$prop}-#{$side}: $value;
         }
     }
     .login-box {
         // 调用
         @include set-value(top, 14px);
     }
     // css 代码
     .login-box {
         margin-top: 14px;
         padding-top: 14px;
     }
     
     // 类名的拼接
     // sass 代码
     @mixin generate-sizes($class, $small, $medium, $big) {
     	.#{$class}-small {font-size: $small;}
     	.#{$class}-medium {font-size: $medium;}
     	.#{$class}-big {font-size: $big;}
     }
     @include generate-sizes("header", 12px, 24px, 36px);
     // css 代码
     .header-small {
         font-size: 12px;
     }
     .header-medium {
         font-size: 24px;
     }
     .header-big {
         font-size: 36px;
     }
     ```

     

   * 注释

     * 两种注释

     ```scss
     // 第一种 单行注释 //	不会在编译出来的css文件中显示
     // 第二种 多行注释 /**/  会在编译出来的css文件中显示
     ```

     

   * 数据类型

     ```scss
     // sass 有6中数据类型
     // 数字: 如，1、 2、 13、 10px；
     // 字符串：有引号字符串或无引号字符串，如，"foo"、 'bar'、 baz；
     // 颜色：如，blue、 #04a3f9、 rgba(255,0,0,0.5)；
     // 布尔型：如，true、 false；
     // 空值：如，null；
     // 数组(list)：用空格或者逗号分开，如，1.5em 1em 0 2em 、 Helvetica, Arial, sans-serif；
     // maps：相当于 JavaScript 的 object，(key1: value1, key2: value2)。
     ```

     

   * 字符串

     ```scss
     // 在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 #{ }插值语句 (interpolation) 时，有引号字符串将被编译为无引号字符串，这样方便了在混合指令 (mixin) 中引用选择器名.
     ```

     

9. sass 的运算符

   * 加减乘除

     ```scss
     // 变量或属性都可以做加减乘除运算, 不同类型的单位会报错, 除了in
     // 加减法运算
     // sass 代码
     .box {
         // in 表示英寸, 特殊单位, 1in=96px
         width: 10px + 2in;
         height: 2in - 20px;
     }
     // css 代码
     .box {
         width: 202px;
         height: 172px;
     }
     
     // 乘除法
     // 对于除法, 如果数值或它的任意部分是存储在一个变量中或是函数的返回值
     // sass 代码
     .box {
         width: 10px * 2;
         // 进行除法运算时需要加括号, 原因是"/"符号在css中已作为符号使用, 直接使用不会生效
         height: (20px/2);
     }
     // css 代码
     .box {
         width: 20px;
         height: 10px;
     }
     ```

     

   * 高级运算符

     ```scss
     // 所有算数运算都支持颜色值，并且是分段运算的。
     // 也就是说，红、绿和蓝各颜色分段单独进行运算。
     // sass 代码
     p {
         // 计算公式: 01 + 04 = 05、02 + 05 = 07 和 03 + 06 = 09
         // 并且被合成为：#050709
         color: #010203 + #040506;
     }
     // css 代码
     p {
         color: #050709;
     }
     
     // sass 代码
     p {
         // 计算公式: 01 * 2 = 02、02 * 2 = 04 和 03 * 2 = 06
         // 并且被合成为：#020406
         color: #010203 * 2;
     }
     // css 代码
     p {
         color: #020406;
     }
     ```

     

10. sass 的控制流程

    * 判断

      ```scss
      // 基本语法规则: @if @else if @else
      // 表达式返回值不是false或null时, 条件成立, 输出{}内的代码
      // sass 代码
      @mixin fontSize($size:16px){
          if $size == 12px {
              font-size: $size;
          } @else if $size == 14px {
              font-size: $size;
          } @else {
              font-size: 20px;
          }
      }
      p {
          @include fontSize(12px); 
      }
      // css 代码
      p {
          font-szie: 12px;
      }
      ```

      

    * 循环

      ```scss
      // @for
      // for循环有以下两种表现形式: 
      // @for $i from <start> through <end>
      // @for $i from <start> to <end>
      // 区别在于 through 与 to 的含义：当使用 through 时，条件范围包含 <start> 与 <end> 的值，而使用 to 时条件范围只包含 <start> 的值不包含 <end> 的值, <start> 和 <end> 必须是整数值
      // sass 代码
      @mixin setLiToValue($num){
          @for $i from 1 through $num {
              .list#{$i} {
                  top: (0 - $i) * 50px;
              }
          }
      }
      @include setLiToValue(5);
      // css 代码
      .list1 {
          top: -50px;
      }
      .list2 {
          top: -100px;
      }
      .list3 {
          top: -150px;
      }
      .list4 {
          top: -200px;
      }
      .list5 {
          top: -250px;
      }
      
      // @while
      // 重复输出格式直到表达式返回结果为false
      // sass 代码
      @mixin setLeftToValue($type, $num){
          @while $type <= $num {
              .list#{$type} {
                  left: $type * 50px;
              }
              $type: $type + 1;
          }
      }
      @include setLeftToValue(1, 5);
      // css 代码
      .list1 {
          left: 50px;
      }
      .list2 {
          left: 100px;
      }
      .list3 {
          left: 150px;
      }
      .list4 {
          left: 200px;
      }
      .list5 {
          left: 250px;
      }
      
      // @each
      // each循环的表现形式: $each $i in <list>, 其中<list>是值列表
      // 遍历一个列表，然后从列表中取出对应的值
      // sass 代码
      $list: nav head main foot;
      @mixin pageList($li) {
          @each $i in $li {
              .li-#{$i} {
                  background-color: red;
                  color: blue;
              }
          }
      }
      ul {
          @include pageList($list);
      }
      // css 代码
      ul .list-nav {
          background-color: red;
          color: blue;
      }
      ul .list-head {
          background-color: red;
          color: blue;
      }
      ul .list-main {
          background-color: red;
          color: blue;
      }
      ul .list-foot {
          background-color: red;
          color: blue;
      }
      ```

      

11. sass 的函数

    * 字符串函数
    
      ```scss
      // unquote($string): 删除字符串中的引号, 注意,如果是多重引号嵌套, 那么只会去除最外层的
      // quote($string): 给字符串添加引号, 注意,如果字符串已经有引号,则无效果
      ```
    
      
    
    * 数字函数
    
      ```scss
      // percentage($value)：将一个不带单位的数转换成百分比值；
      // round($value)：将数值四舍五入，转换成一个最接近的整数；
      // ceil($value)：向上取整；
      // floor($value)：向下取整；
      // abs($value)：返回一个数的绝对值；
      // random(): 获取随机数
      ```
    
      
    
    * 数组函数
    
      ```scss
      // length($list)：返回一个列表的长度值；
      // nth($list, $n)：返回一个列表中指定的某个标签值
      // join($list1, $list2, [$separator])：将两个列给连接在一起，变成一个列表；
      // append($list1, $val, [$separator])：将某个值放在列表的最后；
      // zip($lists…)：将几个列表结合成一个多维的列表；
      // index($list, $value)：返回一个值在列表中的位置值。
      ```
    
      
    
    * 颜色函数
    
      ```scss
      // rgb($red,$green,$blue)：根据红、绿、蓝三个值创建一个颜色；
      // rgba($red,$green,$blue,$alpha)：根据红、绿、蓝和透明度值创建一个颜色；
      // red($color)：从一个颜色中获取其中红色值；
      // green($color)：从一个颜色中获取其中绿色值；
      // blue($color)：从一个颜色中获取其中蓝色值；
      // mix($color-1,$color-2,[$weight])：把两种颜色混合在一起, 最后一个参数是混合的比例
      // alpha($color) /opacity($color)：获取颜色透明度值；
      // rgba($color, $alpha)：改变颜色的透明度值；
      // opacify($color, $amount) / fade-in($color, $amount)：使颜色更不透明；
      // transparentize($color, $amount) / fade-out($color, $amount)：使颜色更加透明。
      ```
    
      
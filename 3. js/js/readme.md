有继承性的属性：

1、字体系列属性

    font：组合字体
    
    font-family：规定元素的字体系列
    
    font-weight：设置字体的粗细
    
    font-size：设置字体的尺寸
    
    font-style：定义字体的风格
    
    font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。
    
    font-stretch：允许你使文字变宽或变窄。所有主流浏览器都不支持。
    
    font-size-adjust：为某个元素规定一个 aspect 值，字体的小写字母 "x" 的高度与"font-size" 高度之间的比率被称为一个字体的 aspect 值。这样就可以保持首选字体的 x-height。

2、文本系列属性
    
    text-indent：文本缩进
    
    text-align：文本水平对齐
    
    line-height：行高
    
    word-spacing：增加或减少单词间的空白（即字间隔）
    
    letter-spacing：增加或减少字符间的空白（字符间距）
    
    text-transform：控制文本大小写
    
    direction：规定文本的书写方向
    
    color：文本颜色

3、元素可见性

    visibility

4、表格布局属性

    caption-side、border-collapse、border-spacing、empty-cells、table-layout

5、列表属性

    list-style-type、list-style-image、list-style-position、list-style

6、生成内容属性

    quotes

7、光标属性

    cursor

8、页面样式属性

    page、page-break-inside、windows、orphans

9、声音样式属性

    speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation

所有元素可以继承的属性：

    1、元素可见性：visibility、opacity2、光标属性：cursor

内联元素可以继承的属性:

    1、字体系列属性2、除text-indent、text-align之外的文本系列属性

块级元素可以继承的属性:

    1、text-indent、text-align
    
AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
类似的还有 CommonJS Modules/2.0 规范，是 BravoJS 在推广过程中对模块定义的规范化产出。
1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
2. CMD 推崇依赖就近，AMD 推崇依赖前置。

cookie数据始终在同源的http请求中携带
而localStorage和sessionStorage始终保存在本地浏览器
sessionStorage 当前浏览器关闭前有效
localStorage 始终有效

ajax的优缺点

     优点：减轻服务器的负担,按需取数据,最大程度的减少冗余请求，局部刷新页面,减少用户心理和实际的等待时间,带来更好的用户体验，基于xml标准化,并被广泛支持,不需安装插件等，进一步促进页面和数据的分离
     缺点：AJAX大量的使用了javascript和ajax引擎,这些取决于浏览器的支持.在编写的时候考虑对浏览器的兼容性。

    1.Ajax的优势：1.可搜索性 2.开放性 3.费用 4.易用性 5.易于开发。
    2.Flash的优势：1.多媒体处理 2.兼容性 3.矢量图形 4.客户端资源调度
    3.Ajax的劣势：1.它可能破坏浏览器的后退功能   2.使用动态页面更新使得用户难于将某个特定的状态保存到收藏夹中 ，不过这些都有相关方法解决。
    4.Flash的劣势：1.二进制格式 2.格式私有 3.flash 文件经常会很大，用户第一次使用的时候需要忍耐较长的等待时间  4.性能问题
    

浏览列表就是浏览器对象
    
    history location screen navigator
    
    
    严格模式下函数的this指向undefined
    
    
js中的全局函数
    
    编码相关:
        encodeURI()
        decodeURI()
        encodeURIComponent()
        decodeURIComponent()
        escape(): 对字符串进行编码
        unescape(): 对由escape()编码的字符串进行解码
    类型转换:
        String()
        Number()
    数字相关:
        parseInt()
        parseFloat()
        isNaN()
        isFinite()
    特殊:
        eval()
        
        
readystatechange: 读取状态变化
pageshow: 页面展示
beforeunload: 页面退出
DOMContentLoaded: dom内容加载完成


ECMAScript中，变量可以存放两种类型的值，即原始值和引用值。
原始值是存储在栈中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。
引用值是存储在堆中的对象，也就是说，存储在变量处的值是一个指针，指向存储对象的内存处。

JavaScript的基本数据类型在储存在计算机内存中用八字节(8byte)


YUI js和css创建的工具和控件集
JQuery js库
MooTools  简洁, 模块化, 面向对象的web引用框架
ExtJS 
Yahoo! User Interface  库  (YUI)  包含一个  bucketload 。
和  YUI  一样， ExtJS  包含大量开箱即用的组件，其中有很多功能强大的网格控件，支持内联编辑、分页、筛选、分组、汇总、缓冲和数据绑定。
MooTools  和  Prototype 、 jQuery  不包含开箱即用的  UI  控件和小部件.


audio和video支持的格式

    Ogg、MPEG4、WebM
    
CSS中通过@font-face使用字体也会有跨域问题 ?

数据结构的分类:

    1. 集合
        数据结构中的元素之间除了“同属一个集合” 的相互关系外，别无其他关系
    2. 线性结构
        常用的线性结构有：线性表，栈，队列，双队列，数组，串。
        数据结构中的元素存在一对一的相互关系。
    3. 树形结构
        树形结构是一层次的嵌套结构。 
        一个树形结构的外层和内层有相似的结构，所以这种结构多可以递归的表示。
        经典数据结构中的各种树状图是一种典型的树形结构：一颗树可以简单的表示为根， 左子树， 右子树。 左子树和右子树又有自己的子树。
    4. 图形结构
        图状结构，简称“图”，是一种复杂的数据结构。
        图状结构中，每个结点的前驱结点数和后续结点数可以任意多个。
        数据元素间的关系是任意的。
        其他数据结构(如树、线性表等)都有明确的条件限制，而图形结构中任意两个数据元素间均可相关联。
        
        
        
script 脚本放在head和放在body的区别

    script标签内未设置async时：
    （1）script放在<head>，会阻塞HTML代码的解析和渲染，而放在<body>底部时，不会阻塞HTML代码的解析和渲染。
    （2）script放在<head>，将无法操作HTML元素，而放在<body>底部时，可以操作HTML元素。
    （3）script放在<head>，无法通过脚本改变内联的CSS样式，而放在<body>底部时，可以通过脚本改变内联的CSS样式
    script标签内设置async时：
    script放在<head>和放在<body>底部时没区别。
    script标签设置defer时（仅对IE浏览器有用），script脚本会异步加载，在加载过程中不会阻塞HTML代码的解析和渲染，当script脚本加载完毕后，script脚本会立即执行，此时会阻塞HTML代码的解析和渲染。
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
## express框架

1. 什么是 express

   * 基于 Node.js 平台，快速、开放、极简的 Web 开发框架，可以帮助我们简化各种web服务的实现方式。

2. express 的服务搭建

   * 中间件的工作：在特定的工作执行之前, 提前先做一些基本处理
   
3. 注意

   * 不要在同一个地址发送不同的请求方式

   ```js
   // 安装 express
   npm install express -S
   // 导入 express
   const express = require("express");
   // 创建 express 应用
   let app = express();
   
   // 采用原生思路实现路由效果
   // 手动配置路由
   const path = require("path");
   const fs = require("fs")
   app.get("/", (req, res) =>{
       fs.readFile(`${__dirname}/website/index.html`, "utf8", (err, data)=>{
           if (err) throw err;
           res.send(data);
       })
   })
   // 监听 8080 端口
   app.listen(8080);
   
   // 采用 express 思路实现路由效果
   // 自动配置静态资源服务器, 使用中间件(如同转化流)
   app.use(express.static(`${__dirname}/website`));
   app.listen(8080);
   
   // 函数本身就是一个中间件
   // 需要加入第三个参数 next
   // 在中间件中调用了next后, next后面的代码将不再执行
   // 在next前面调用send后, 后面的中间件将不再执行
   // 第一种写法
   let a = 1;
   app.get("/", (res, req, next)=>{
       a+=1;
       // 以上代码执行完毕后需要 next() 以下, 才会调用后面的中间件函数
       next();
   }, (res, req)=>{
       // 如果发送的数据中变量, 需要用模板字符串转化为字符串
       res.send(`${a}`);
   })
   // 第二种写法
   let a = 1;
   app.get("/", (res, req, next)=>{
       a+=1;
       next()
   })
   app.get("/", (res, req)=>{
       res.send(`${a}`);
   })
   
   // 一个 express 应用也可以是一个中间件
   const qq = express();
   // 这里的路径称作路由, 这里的路由指的是软路由, 就是地址
   // 将某个应用挂载在单个指定的地址
   app.use("/", qq);
   // 将某个应用挂载在多个指定的地址
   app.use(["/qq", "/qqzone", "game"], qq);
   // 挂载应用可以用某些规则来指定
   // *表示任意的0个或多个字符
   app.use("/adm*n", qq);
   ```

   

   ```js
   // 安装 multer 中间件 引入
   npm install multer
   const express = require("express")
   const multer = require("multer");
   const path = require("path");
   let app = express();
   // 创建一个中间件, 设置配置信息
   // 简单处理
   let upload = multer({
       // 指定文件上传的目录
       dest: path.join(__dirname, "website/upload"),
   })
   app.use(express.static(`${__dirname}/webside`));
   // array(name, maxCount) 表示多个数据
   // single(name) 表示单个数据
   // fields([{name:name, maxCount:10},{name:name, maxCount:1}]) // 表示多个input上传文件, 单个文件时需要手动写, 否则会报错
   app.post("/api/postDataImage", upload.array("name", 10), (req, res) => {
       console.log(req.body); // 返回一个对象
       console.log(req.file); // 返回单个文件详细信息, 单个对象
       console.log(req.files); // 返回每个文件详细信息, 一个数组嵌套多个对象
       res.send("发送成功");
   })
   
   // 实现复杂操作
   let storage = multer.diskStorage({
       destination: function(req, file, callback){
           switch(files.mimetype){
               // callback的第一个参数固定为null
               case "image/jpeg":
                   callback(null, path.join(__dirname, "website/upload/jpegImg"));
               default:
                   callback(null, path.join(__dirname, "website/upload"))
           }
       },
       filename: function(req, file, callback){
           callback(null, file.originalname)
       }
   })
   let upload = multer({
       storage: storage
   });
   
   // req.body 包含文本字段 直接使用 upload.none()
   ```

   

   ```js
   const express = requrie("express");
   let app = express();
   // 返回一个路由的实例
   app.route("/api/img/data")
   // 对所有请求进行操作, 一定是放在最前面
   .all(function(req, res, next) {
       next();
   })
   // 以下是对对应的请求进行操作
   .get(function(req, res) {
       res.send("");
   })
   .options(function(req, res) {
       res.send("");
   })
   .post(function(req, res) {
       res.send("");
   })
   
   // 设置请求头
   app.set({
       "Set-Cookie": ""
   })
   ```

   

   ```js
   // use 的使用规则
   const express = require(express);
   let app = express();
   // 使用 use 的话, "/link" 子链接都会显示父链接传送的数据
   // use 的时候, 有公共的path, 那么其他的处理函数, 类似于中间件 
   app.use("/link", function(req, res) {
       res.send("")
   })
   // 下面的中间件不会执行
   app.use("/link/childLink", function(req, res) {
       res.send("")
   })
   
   // 通过规则来匹配路径
   // * 表示任意的一个或多个字符
   // ? 表示前面的字符可有可无
   // () 表示包装成一组字符
   app.use("/link?")
   ```

   

   ```js
   // 利用 express.Router() 实现多个路由挂载
   const express = require("express");
   let app = express();
   
   let admin = express.Router();
   admin.get("/admin", function(req, res){
       res.send("管理员界面");
   })
   
   let login = express.Router();
   login.get("/login", function(req, res){
       res.send("登录界面");
   })
   
   app.use("/user", [admin, login]);
   app.listen(8080);
   
   // 可以和其他混合使用
   ```

   

   ```js
   // request 对象
   // 表示一个路由实力挂载的url路径
   req.baseUrl 
   // 表示网站上除主机名以外的url路径
   req.originalUrl 
   // 表示originalUrl去除了baseUrl的url路径
   req.path 
   // originalUrl = baseUrl + path
   // 前端返回的数据
   req.body 
   req.headers
   // 对应路径的变量 在路径的某个词前面加上: 使其变成变量
   // 参数 返回一个对象 { 变量: "在网址上输入的信息" }
   req.params
   ```

   

   ```js
   // response 对象
   // 响应数据
   res.send("")
   // 设置响应头信息, 同一字段进行覆盖操作, set 会覆盖 append
   res.set({
       "Set-Cookie": "uid=12345879"
   })
   // 返回一个boolean, 头部是否发送, true为发送, false为未发送
   res.headersSent
   // 追加响应头信息, 同一字段追加一个, append 只会追加一个, 一般 append 放在 set 后面
   res.append(filed, value)
   // 设置http响应头Content-Disposition内容为attachment, 如果有设置filename, 则设置filename="filename"
   // Content-Disposition: attachment; filename="1.jpg"
   // filename参数表示预填为下载后的文件名
   // 下载文件的方法
   res.attachment([filename])
   // 下载文件的方法
   res.download(path[, filename, fn])
   // 响应文件
   res.sendFile(path[, options, fn])
   // 设置cookie信息
   res.cookie(name, value[, options])
   // 根据请求头的accept内容来进行处理
   res.format({
       "text/html": function(){
           res.send("");
       },
       "application/json": function(){
           res.send("");
       },
       "text/plain": function(){
           res.send("");
       },
       "image/*": function(){
           res.send("");
       }
       "default": function(){
           res.status(406).send("not acceptable");
       }
   })
   // 重定向
   res.redirect([status, ]path)
   // 响应状态码
   res.status(num)
   ```

   

   ```js
   // 下载文件的三种方法
   const express = require("express");
   const fs = require("fs");
   let app = express();
   // 第一种方式 流的方式返回 路径参数决定文件名称
   app.get("/1.exe", function(req, res){
       res.set({
           "Content-Type": "application/octet-stream"
       })
       // 通过pipe的方式进行响应
       fs.createReadStream(`${__dirname}/website/1.exe`).pipe(res);
   })
   // 第二种方式 路径简单
   app.get("/:id", function(req, res){
       fs.readFile(`${__dirname}/website/${req.params.id}.exe`, function(err, data){
           if (err) throw err;
           res.attachment(`${req.params.id}.exe`);
           res.send();
       })
   })
   // 第三种方式 路径相对复杂
   app.get("/:id", function(req, res){
       res.download(`${__dirname}/website/${req.params.id}.exe`, function(err){
           if (err) throw err;
           res.sendFile(`${__dirname}/website/${req.params.id}.exe`)
       })
   })
   ```

   

   ```js
   // 该插件对应 req.body 
   npm install body-parser
   // 该插件对应 req.cookies
   npm install cookic-parser
   
   const express = require(express);
   const bodyParser = require("body-parser");
   const cookicParser = require("cookic-parser");
   
   let app = express();
   app.use(bodyParser.urlencoded({extended: false}));
   app.use(bodyParser.json());
   app.use(cookicParser());
   
   app.use("/:id", function(req, res) {
       console.log("body", req.body); // 返回一个对象, 如果没有使用这个插件, 返回的是 undefined
       console.log("cookies", req.cookies); // 返回一个对象
   })
   
   app.param("id", function(req, res){
       
   })
   ```

   * res.sendFile中的options的参数

   | **属性**     | **描述**                                                     | **默认值** | **可用版本** |
   | ------------ | ------------------------------------------------------------ | ---------- | ------------ |
   | maxAge       | 设置Cache-Control的max-age属性，格式为毫秒数，或者是ms format的一串字符串 | 0          |              |
   | root         | 相对文件名的根目录                                           |            |              |
   | lastModified | 设置Last-Modified头部为此文件在系统中的最后一次修改时间。设置false来禁用它 | Enable     | 4.9.0+       |
   | headers      | 一个对象，包含了文件所在的sever的HTTP头部。(不知道怎么翻译了) |            |              |
   | dotfiles     | 是否支持点开头文件名的选项。可选的值"allow","deny","ignore"  | "ignore"   |              |

   * res.cookie中的options的参数

   | **属性** | **类型** | **描述**                                                     |
   | -------- | -------- | ------------------------------------------------------------ |
   | domain   | String   | 设置cookie的域名。默认是你本app的域名。                      |
   | expires  | Date     | cookie的过期时间，GMT格式。如果没有指定或者设置为0，则产生新的cookie。 |
   | httpOnly | Boolean  | 这个cookie只能被web服务器获取的标示。                        |
   | maxAge   | String   | 是设置过去时间的方便选项，其为过期时间到当前时间的毫秒值。   |
   | path     | String   | cookie的路径。默认值是/。                                    |
   | secure   | Boolean  | 标示这个cookie只用被HTTPS协议使用。                          |
   | signed   | Boolean  | 指示这个cookie应该是签名的。                                 |

4. ejs引擎模板 (知道就好,  不必深究)

   * 将数据与结构拆分,  通过模板引擎实现网页的柔性开发

   ```js
   npm install ejs
   // ejs.js
   const express = require("express");
   const ejs = require("ejs");
   const fs = require("fs");
   let app = express();
   // 渲染 ejs
   res.render(view[, locals, callback])
   app.get("/", (req, res) => {
       fs.readFile(`${__dirname}/website/data/index.json`, "utf8", function(err,data){
           let json = JSON.parse(data);
           res.render(`${__dirname}/website/index.ejs`, { article }, function(err, html){
           res.send(html);
           })
       })
   }) 
   ```

   ```html
   // index.ejs
   <body>
       // ejs的模块引入
       <%- incloud("head.ejs", {article}) %>
   	<h1><%= article.title %></h1>
   	<span><%= article.author %></span>
   	<span><%= article.content %></span>
   	<ul>
       	<% for (let i = 0; i<article.arr.length; i++) { %>
                <li><%= article.arr[i] %></li>
           <% } %>
       </ul>
   </body>
   ```

   ```json
   // index.json
   {
       "article": {
           "title": "标题",
           "author": "小鑫",
           "content": "主要内容",
           "arr": [
               "我爱你",
               "我喜欢你",
               "我想你",
               "我要你"
           ]
       }
   }
   ```

   

5. 名词解释

   ```js
   // 幂等: 对于同一种行为, 不论执行多少次, 最终的结果都是一致的
   // 非幂等: 对于同一种行为, 每次执行后的结果都不相同, 最终的结果与执行的次数有关
   ```

6. 状态码

   ```js
   // 1 消息
   ▪ 100 Continue  继续
   ▪ 101 Switching Protocols  交换协议
   ▪ 102 Processing  加工
   // 2 成功
   ▪ 200 OK  成功
   ▪ 201 Created  已创建
   ▪ 202 Accepted  公认
   ▪ 203 Non-Authoritative Information  非权威信息
   ▪ 204 No Content  无内容
   ▪ 205 Reset Content  重置内容
   ▪ 206 Partial Content  部分内容
   ▪ 207 Multi-Status  多状态
   // 3 重定向
   ▪ 300 Multiple Choices  多项选择
   ▪ 301 Moved Permanently  永久移动
   ▪ 302 Move Temporarily  暂时移动
   ▪ 303 See Other  查看其它
   ▪ 304 Not Modified  未修改
   ▪ 305 Use Proxy  使用代理服务器
   ▪ 306 Switch Proxy  切换代理服务器
   ▪ 307 Temporary Redirect  临时重定向
   // 4 请求错误
   ▪ 400 Bad Request  错误的请求
   ▪ 401 Unauthorized  未经授权
   ▪ 402 Payment Required  需要付款
   ▪ 403 Forbidden  禁止
   ▪ 404 Not Found  未找到
   ▪ 405 Method Not Allowed  不允许的方法
   ▪ 406 Not Acceptable  不能接受
   ▪ 407 Proxy Authentication Required  需要代理身份验证
   ▪ 408 Request Timeout  请求超时
   ▪ 409 Conflict  冲突
   ▪ 410 Gone  不见了
   ▪ 411 Length Required  长度要求
   ▪ 412 Precondition Failed  先决条件失败
   ▪ 413 Request Entity Too Large  请求的实体太大
   ▪ 414 Request-URI Too Long  请求路径太长
   ▪ 415 Unsupported Media Type  不支持的媒体类型
   ▪ 416 Requested Range Not Satisfiable  请求的范围不满足
   ▪ 417 Expectation Failed  期望失败
   ▪ 418 I am a teapot  我是茶壶
   ▪ 421 Misdirected Request  错误的请求
   ▪ 422 Unprocessable Entity  不可处理的实体
   ▪ 423 Locked  锁定
   ▪ 424 Failed Dependency  失败的依赖
   ▪ 425 Too Early  太早了
   ▪ 426 Upgrade Required  需要升级
   ▪ 449 Retry With  重试
   ▪ 451 Unavailable For Legal Reasons  因法律原因不可用
   // 5 服务器错误
   ▪ 500 Internal Server Error  内部服务器错误
   ▪ 501 Not Implemented  未实现
   ▪ 502 Bad Gateway  错误的网关
   ▪ 503 Service Unavailable  暂停服务
   ▪ 504 Gateway Timeout  网关超时
   ▪ 505 HTTP Version Not Supported  不支持 HTTP 版本
   ▪ 506 Variant Also Negotiates  变体也在谈判
   ▪ 507 Insufficient Storage  储存空间不足
   ▪ 509 Bandwidth Limit Exceeded  超出带宽限制
   ▪ 510 Not Extended  未扩展
   ▪ 600 Unparseable Response Headers  无法解析的响应头
   ```

   ```js
   1**	信息，服务器收到请求，需要请求者继续执行操作
   2**	成功，操作被成功接收并处理
   3**	重定向，需要进一步的操作以完成请求
   4**	客户端错误，请求包含语法错误或无法完成请求
   5**	服务器错误，服务器在处理请求的过程中发生了错误
   ```

   ```js
   100	Continue	继续。客户端应继续其请求
   101	Switching Protocols	切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议
   200	OK	请求成功。一般用于GET与POST请求
   201	Created	已创建。成功请求并创建了新的资源
   202	Accepted	已接受。已经接受请求，但未处理完成
   203	Non-Authoritative Information	非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本
   204	No Content	无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
   205	Reset Content	重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域
   206	Partial Content	部分内容。服务器成功处理了部分GET请求
   300	Multiple Choices	多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
   301	Moved Permanently	永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
   302	Found	临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI
   303	See Other	查看其它地址。与301类似。使用GET和POST请求查看
   304	Not Modified	未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
   305	Use Proxy	使用代理。所请求的资源必须通过代理访问
   306	Unused	已经被废弃的HTTP状态码
   307	Temporary Redirect	临时重定向。与302类似。使用GET请求重定向
   400	Bad Request	客户端请求的语法错误，服务器无法理解
   401	Unauthorized	请求要求用户的身份认证
   402	Payment Required	保留，将来使用
   403	Forbidden	服务器理解请求客户端的请求，但是拒绝执行此请求
   404	Not Found	服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
   405	Method Not Allowed	客户端请求中的方法被禁止
   406	Not Acceptable	服务器无法根据客户端请求的内容特性完成请求
   407	Proxy Authentication Required	请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权
   408	Request Time-out	服务器等待客户端发送的请求时间过长，超时
   409	Conflict	服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突
   410	Gone	客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置
   411	Length Required	服务器无法处理客户端发送的不带Content-Length的请求信息
   412	Precondition Failed	客户端请求信息的先决条件错误
   413	Request Entity Too Large	由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息
   414	Request-URI Too Large	请求的URI过长（URI通常为网址），服务器无法处理
   415	Unsupported Media Type	服务器无法处理请求附带的媒体格式
   416	Requested range not satisfiable	客户端请求的范围无效
   417	Expectation Failed	服务器无法满足Expect的请求头信息
   500	Internal Server Error	服务器内部错误，无法完成请求
   501	Not Implemented	服务器不支持请求的功能，无法完成请求
   502	Bad Gateway	作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
   503	Service Unavailable	由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
   504	Gateway Time-out	充当网关或代理的服务器，未及时从远端服务器获取请求
   505	HTTP Version not supported	服务器不支持请求的HTTP协议的版本，无法完成处理
   ```

   
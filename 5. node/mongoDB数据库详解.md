## mongoDB数据库

1. 什么是数据库
   * 广义上，任何能够满足对数据进行“增删改查”功能的程序
   * 数据库本质上是用来储存数据和查询数据
   
2. 数据库的分类
   * 关系型数据库
     * 主要有 MariaDB(MySQL的一个分支)、SQLite、SQL Server、MySQL、PostgreSQL、Oracle、Access、Teradata、SAP、DB2
     * 关系型数据库最典型的数据结构是表，由二维表及其之间的联系所组成的一个数据组织
   * 菲关系型数据库
     * 主要有mongoDB、Hbase、redis、CouchDB、Cassandra、Neo4j
     * 非关系型数据库严格上不是一种数据库，应该是一种数据结构化存储方法的集合，可以是文档或者键值对等

3. mongoDB 数据库的相关操作

   ```js
   // 安装node插件
   npm install mongoose
   // 引入mongoose插件
   const mongoose = require("mongoose");
   // 创建表规则的构造函数
   const Schema = mongoose.Schema;
   // 连接数据库, 后面的name是连接的数据库的名称, 如果不存在, 会自动新建
   mongoose.connect("mongodb://127.0.0.1:27017/name", {
       useNewUrlParser: true,
       useUnifiedTopology: true
   }).then(()=>{
       console.log("连接成功");
   }).catch(()=>{
       console.log("连接失败");
   })
   // 创建表规则
   let userSchema = new Schema({
       str: String,
       num: Number,
       date: Date,
       buf: Buffer,
       bool: Boolean,
       mix: Mixed,
       obj: Object,
       arr: Array,
       dec: Decimal128,
       name: {
           type: String,
           required: true,
           default: {}
       },
       girlFriend: Array
   });
   // 根据表规则创建表
   let userTable = mongoose.model("name", schema);
   // 在表中添加数据
   userTable.create({
       str: "",
       num: 18,
       date: Date,
       buf: Buffer,
       bool: true,
       mix: Mixed,
       obj: {},
       arr: [],
       dec: Decimal128,
       name: "xiaoxin",
       girlFriend: [
           "石原里美",
           "今田美樱",
           "杨超越"
       ]
   }).then(data=>{
       console.log("数据写入成功");
   }).catch(err=>{
       throw err;
   })
   // 查询数据
   // 三种  findOne (查到匹配条件的第一个) find (查到匹配条件的全部) findById (通过_id查询数据)
   // 都是4个形参 (condition 查询条件[, projection 返回数据的过滤规则, options 查询的配置, callback 回调函数])
   // 查询条件
   // 1.通过逻辑条件进行查询 (等于: $e, 大于: $gt, 小于: $lt, 大于等于: $gte, 小于等于: $lte)
   // 2.通过逻辑判断进行查询 (与: $and, 或: $or, 非: $nor) 一般是成套的规则
   // 3.存在条件查询 (对数组的条目的信息判断) 是否存在某个字段 ($in: 存在特定的值, $nin: 不存在特定的值, $exists: (true or false)存在某个属性)
   // 4.数组条件查询 ($size: 数组长度匹配, $all: 数组中是否包含指定项)
   // 5.自定义判断 ($where: 值为函数或者代码块, 返回的值必须是布尔值)
   // 6.正则匹配判断 (//)
   // projection (对符合查询结果的数据中显示的字段进行控制)
   // options (skip: 从第n项开始返回, limit: 返回最多n条数据, sort: 将返回的数据里面的值的顺序进行排序)
   userTable.find({
       str: "",
       num: {
           $gte: 18
       },
       // 返回满足num>=18并且bool为true的数据
       $and: [
           {
               num: {
                   $gte: 18
               }
           },
           {
               bool: true
           }
       ],
       name: {
           // 可以是多个
           $in: ["xiaoxin"]
       },
       girlfriend: {
           // 返回存在girlFriend的对象
           $exists: true
       },
       girlFriend: {
           $size: 3,
           $all: ["杨超越", "石原里美"]
       },
       // 返回值必须为boolean
       $where: function(){
           // this指向当前创建的表
           if(this.girlFriend){
               return this.girlFriend.length > 0;
           } else {
               return false;
           }
       },
       // 正则表达式, 匹配字符串
       name: /xiaoxin/
   },{
       // 当有一个字段设置为true时, 默认其他都不返回, 除了_id, 并且_id需要手动设置为false才不返回
       name: true
   },{
       skip: 0,
       limit: 100,
       sort: {
           // 正值为正序, 负值为倒序
           girlFriend: 1
       }
   }).then(data => {
       console.log("查询成功", data) // 单个数据, data是对象, 多个数据, data是数组
   })
   ```
   
   
   
   ```js
   // 删除数据
   // deleteOne: 删除匹配到的第一个数据
   // deleteMany: 删除匹配到的全部数据
   userTable.deleteMany({
       // 删库跑路
       _id: {
           $exists: true
       }
   }).then(rs => {
       console.log("删除成功", rs);
   }).catch(err => {
       console.log("删除失败");
       throw err;
   })
   // 返回一个对象  { n: 5, ok: 1, deletedCount: 5 }  (第一个: 需要删除的个数, 第二个: 是否删除成功, 第三个: 被删除的个数)
   
   // 修改数据
   // 都是4个形参: (conditions 查询条件, doc: 要修改的内容[, options: 更新配置选项, callback: 回调函数 或是使用promise, 会返回err或是data])
   // update: 更新查询到的第一个数据
   // updateOne: 更新查询到的第一个数据 (update和updateOne完全一致, 建议使用这个)
   // updateMany: 更新查询到的所有数据
   // findByIdAndUpdate
   userTable.updateMany({
       name: "xiaoxin",
       girlFriend: {
           // $elemMatch 匹配对应的值获取对应的下标, 这个下标储存在 $ 内
           $elemMatch: {
               $in: "石原里美"
           }
       }
   },{
       // $set 直接将某个字段替换掉, 覆写操作
       $set: {
           name: "哈哈",
           girlFriend: ["石原里美", "今田美樱", "杨超越"]
       },
       // $push 对某个字段进行添加数据
       $push: {
           girlFriend: "小芝风花"
       },
       // 可以对某个字段的单个数据进行修改
       $set: {
           girlFriend.$: "张奕华"
       },
       // 添加多个数据并且去重
       $addToSet: {
           girlFriend: ["石原里美", "张奕华", "赵晓仪"]
       },
       // 对某个字段进行删除
       $pop: {
           // 正数从末尾开始删除, -1从开头开始删除
           girlFriend: 1
       },
       // 对某个字段进行删除单个或者多个
       $pull: {
           girlFriend: {
               $in: ["石原里美", "今田美樱"]
           }
       },
       // 对整个字段进行删除
       $unset: {
           girlFriend: true
       },
       // 每次自增1
       $inc: {
           __v: 1
       }
   }).then(data => {
       console.log("数据更新成功", data);
   }).catch(err => {
       console.log("数据更新失败");
       if (err) throw err;
   })
   // 返回一个对象  { n: 0, nModified: 0, ok: 0 } (第一个: 需要更新的个数, 第二个: 值变化的个数, 第三个: 是否更新成功)
   
   let table = new Schema({
       // 数字验证
       num: {
           // 可以设置值的上下限
           type: Number,
           required: true,
           min:0
           max:100
       },
       // 字符串验证
       str: {
           type: String,
           required: true,
           // 该字段的值只允许出现在这几个之内
           enum: []
       },
       // 自定义验证
       name: {
           dolidate: {
               validator: function(value){
                   // 返回一个boolean
               	return true;
           	},
               message: "作为错误的信息输入"
           }
       }
   })
   ```
   
   
   
   ```js
   // 表关联
   const mongoose = require("mongoose");
   const Schema = mongoose.Schema;
   
   mongoose.connect("mongoose://127.0.0.1:27017/xiaoxin", {
       useNewUrlParser: true,
       useUnifiedTopology: true
   }).then(()=>{
       console.log("连接成功");
   }).catch(()=>{
       console.log("连接失败");
   })
   // 创建第一张表规则
   let userSchema = new Schema({
       name: String,
       age: Number,
       sex: String,
       girlFriend: Array
   })
   // 创建第一张表
   let userTable = mongoose.model("usertables", userSchema)
   // 创建第二张表规则
   let levelSchema = new Schema({
       name: String,
       lesson: String,
       level: Number,
       num: {
           type: Schema.Types.ObjectId,
           // 关联表
           ref: "userSchema"
       }
   })
   // 创建第一张表规则
   let levelTable = mongoose.model("leveltables", levelSchema)
   
   useTable.create({
       name: "xiaoxin",
       age: 18,
       sex: "nan",
       girlFriend: [
           "石原里美",
           "今田美樱",
           "张奕华",
           "赵晓仪",
           "杨超越"
       ]
   }).then(res => {
       console.log("成功", res)
   })
   // 
   levelTable.create({
       name: "xiaoxin",
       lesson: "前端",
       level: 2
   })
   ```
   
4. pm2 应用进程管理器

   ```js
   // 建议全局安装
   npm install pm2 -g
   // 查看npm全局地址
   npm config get prefix
   // 启动项目
   pm2 start ./index.js
   // 列出当前运行的项目
   pm2 list
   // 停止项目
   pm2 stop id/name
   // 重启项目
   pm2 restart id/name
   // 删除项目
   pm2 delete id/name
   // 展示当前基本信息
   pm2 monit
   // 显示日志
   pm2 logs
   ```

   
const express = require("express");

let app = express();

app.get("/data", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send([
        {
            name: "zhaoxiaoy",
            age: 18,
            sex: "女"
        },
        {
            name: "zhangyihua",
            age: 20,
            sex: "女"
        },
        {
            name: "jintianmieying",
            age: 22,
            sex: "女"
        },
        {
            name: "shiyuanlimei",
            age: 24,
            sex: "女"
        }]);
    // res.json([
    //     {
    //         name: "zhaoxiaoy",
    //         age: 18,
    //         sex: "女"
    //     },
    //     {
    //         name: "zhangyihua",
    //         age: 20,
    //         sex: "女"
    //     },
    //     {
    //         name: "jintianmieying",
    //         age: 22,
    //         sex: "女"
    //     },
    //     {
    //         name: "shiyuanlimei",
    //         age: 24,
    //         sex: "女"
    //     }
    // ])
})

app.listen(3000, () => {
    console.log("正在监听3000 port")
})
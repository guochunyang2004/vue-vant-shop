var express = require('express');
var app = express();

app.use((req, res, next) => {
    // 设置是否运行客户端设置 withCredentials
    // 即在不同域名下发出的请求也可以携带 cookie
    res.header("Access-Control-Allow-Credentials",true)
    // 第二个参数表示允许跨域的域名，* 代表所有域名  
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS') // 允许的 http 请求的方法
    // 允许前台获得的除 Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma 这几张基本响应头之外的响应头
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    if (req.method == 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
})
app.get('/xxx',function(req, res){
    res.send("xxx你好！");
})

app.get('/tabs',function(req, res) {
    var tabBtnList = [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"
      ];
      res.send(tabBtnList);
})

app.listen(5632,function(){
    console.log("5632 运行");
});

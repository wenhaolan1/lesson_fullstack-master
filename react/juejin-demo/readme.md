- 单页应用 SPA
    BrowserRouter/HashRouter    包着app
        路由思维先于组件化思维
    设计路由    mysql id 自增   唯一
    id 动态参数 params
    ?id=1 qs
    时间戳  + 随机数
    mongodb    NOSQL 非关系型数据库 hashCode hash运算
    GET  Https://juejin.cn/post/7090222005944844302
    某用户的所有文章列表
    一级路由 
    <Route path="/post/:id" elememt={<Detail/>}/>
    <Route path="/post/:id" elememt={<User/>}/>
    二级路由
    <Route path="/post/:id/posts" elememt={<UserPosts/>}/>
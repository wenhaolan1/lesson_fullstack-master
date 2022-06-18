- JSX对象 不是html  怎么运行的
    1. 受限通过工程化的babel(js转移工具)
        @babel/preset-react jsx代码转义
    2. react 可以运行代码
        React.createelement(dom标签，属性对象|null 
        返回值？ 对象
        document.getElementById('root').appendChild(JSX对象)
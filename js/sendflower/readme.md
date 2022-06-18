# JS 送花
## talk in js

1.js运行在浏览器代理中 （url），宿主环境（window 全局对象）
   - typeof window 对象类型 生而知之 
   -a b name 声明在全局作用域中
   -c 声明在函数中  函数 局部作用域 

- es6 let const 与 var
    1.相同点都是全局， 属于声明所在的作用域
       直接用变量名来直接访问
    2.var 会自动挂载在window对象上
      其实是副作用，不太对的
      window.a  不好的
      以后就不用了 let 可以完全替代

    3.let const 不会挂载在window对象上

    4.const 常量 不可修改
       1，如果是简单数据类型，值不能改变
       2. 如果是复杂数据类型，值可以变，但是类型不能变
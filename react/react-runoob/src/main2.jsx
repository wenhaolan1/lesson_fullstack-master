import React,{ useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// root 节点 根节点？
// root 节点范围内react 起作用
// html -> js 
// jsx js 扩展语法 只在react中可以生效
// react 用来表达UI组件
// jsx 优点 ui 简单 方便 `
//   <li>
//     <span>fdfdfdfdf</span>
//   </li>
// `
// JSX class 不能用， 得用className
// js  class ? 关键字
// let name = '解封';
// // JSX 模板
// const element = <h1 className="nie-bd">hello, {name}</h1>;
// // 自定义组件
// const Hello = () => {
//   JSX
//   return <div>hello {name}</div>
// }
// obj Proxy
// let [dataStr, setDataStr] = useState;
let dateStr = new Date().toLocaleTimeString();
setInterval(() => {
  dateStr = new Date().toLocaleTimeString();
}, 1000)
ReactDOM.createRoot(document.getElementById('root')).render(
  // element
  //  <Hello></Hello>
  // UI大舞台
  <div>
  <h1>Hello,world</h1>
  <h2>现在是 {dateStr}</h2>
  </div>
)
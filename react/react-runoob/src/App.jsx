// 解构 React Hooks
import React, { useState } from "react";

// 一个函数封装一段jsx
const App = () => {
  // let name = '张三';
  // state 状态
  // 当前组件添加一个状态
  // 解构
  let [isSingle, setIsSingle] = useState(true); // 单身
  let [name, setName] = useState('张三'); // 给jsx 带来状态
  let [date, setDate] = useState(new Date().toLocaleTimeString());
  // JSX {} 占位符， 简单用法 输出值
  // {} 内就是js 的运行区域， 结果默认输出

  setInterval(() => {
    setDate(new Date().toLocaleTimeString())
  }, 1000);
  const changeName = () => {
    // console.log('lalala')
    setName('zhangsan')
  }

  const friends = [{
    name:'李四',
    age:18
  },{
    name:'王五',
    age: 17
  }];
  return (
    <div>
      {/* JSX 简单 高效的UI 模板，状态+时间+...   react  */}
      <p>{isSingle?<span>单身</span>:<span>有主</span>}</p>
      <h1>hello {name}</h1>
      <h2>现在是{date}</h2>
      <ul>
        {
        friends.map((friend, index) => <li key={index}>{friend.name}-{friend.age}</li>)
        }
      </ul>
      <button onClick={changeName}>显示英文名</button>
    </div>
  )
}

export default App
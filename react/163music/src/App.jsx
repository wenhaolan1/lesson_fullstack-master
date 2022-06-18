import { Component, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { GlobalStyle, Tab, TabItem} from './style'  // style.js
// styled-Component  style  定义一段样式
// createGlobalStyle 定义全局样式
// 并以组件的方式返回  


// console.log(GlobalStyle)
// 组件化思想  不以html的思维去看待, 页面的一哥功能块 作为一个组件来看待
// 这个页面分成了几个部分 section

function App() {

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Tab>
      <a className="selected">
        <TabItem>
          <span>推荐</span>
        </TabItem>
      </a>
      <a>
        <TabItem>
          <span>歌手</span>
        </TabItem>
      </a>
      <a>
        <TabItem>
          <span>排行版</span>
        </TabItem>
      </a>
      </Tab>
    </div>
  )
}

export default App

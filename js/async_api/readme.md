# 异步请求数据

1. xhr 和 fetch 关系？
    功能都一样的 xhr 旧时代  fetch es6 最新的api
    fetch('http://localhost:3000/posts')
    .them(data => data.json())
    .then)(data => data)

    xhr = new XMLHttpRequest  xhr 实例
    <!-- request 多种请求方法  get 明文 url 输入  post 加密  -->
    xhr.open("GET","http://localhost:3000/posts", true)
    xhr.send();
    xhr.onreadystatechange = function(event) {
        event.target.readyState  4
        JSON.parse(event.target.responseText)    JSON
        
    }
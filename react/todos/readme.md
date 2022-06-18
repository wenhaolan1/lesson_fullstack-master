1. 目录的作用
    - assets 静态资源文件
        - 自定义字体文件
        - image

        放各种样式的

- antd 阿里的UI 框架 ant 蚂蚁金服
    1. Spin 方便的去做loading...效果
        spinning = loading 状态 tips 文字提示
        加载的内容包在它里面

    2. Tabs+TabPane key + activity + onchange
        Tabs 容器式组件
        TabPane 子组件
        const { Tabs } = antd
        const { TabPane } = Tabs

    3. List + List.Item
        dataSource 配置
        renderItem 每一个的JSX  key?
            classnames  

    4. Icon type 
    5. Input
        数据绑定 onchange 
        onPressEnter    
    6. 数据的流转一定要和状态一致   usestate 组件挂载 + updata
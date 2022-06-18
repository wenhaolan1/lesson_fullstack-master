- js 一切皆对象     css中一切皆盒子
    视觉格式化模型 Visual Formating Model   决定的
    显示文档时使用的计算规则(你看到的是怎么算出来的)
    那些规则？  box 是怎么一你看到的方式显示在document上
    盒子尺寸(box-sizing:border-box) + 定位(position:absolute,float)
    + 盒子类型 + 兄弟元素(float Flex) + 其他因素 

- 盒子的类型由什么决定  display
    两种显示类型来划分display的理解
    - outer display type  对外显示 决定了该元素本身是如何布局的
        即参与何种格式化上下文
        block-level-box
            block list-item table flex grid
        inline-level-box
            inline inline-block inline-table inline-flex inline-grid

    - inner display type
        盒子看成容器， 规定子元素是如何布局的 格式化能力
        - BFC 块级格式化上下文
        - FFC Flex Format Context 
        - GFC Grid Format Context
        - IFC Inline Format Context

- block inline inline-block
    block
        - 占满一行  默认继承父元素的宽度    多个块元素将从上到下进行排列
        - 设置宽高
        - 设置padding 和 margin 
    inline
        - 不会占满一行 宽度随着内容而变化， 多inline 从左到右的顺序一行行排列显示，
        如果一行放不下，则自动换行
        - 不能设置宽和高
        - margin-top 不生效
    inline-block 
        - 不会占满一行，宽度随内容变化
        - 可以设置宽高
        - 设置padding margin

- 格式化上下文 Formatting  Context
    页面中的一块渲染区域 规定了渲染区域的子元素是如何排版和相互作用的
    不同盒子的不同类型格式化上下文
    BFC    块级格式化上下文
    IFC    行内格式化上下文
    FFC    弹性格式化上下文
    GFC    栅格格式化上下文

- BFC
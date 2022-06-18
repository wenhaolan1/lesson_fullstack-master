# es6 新的数据类型
    大数据 数值表示范围 

js 简单数据类型
    String boolean number undefined null bigint 

- 大数据时代，es6 推出了新的简单数据类型 BinInt
- 适合大数相加  准确  不适合/  舍去小数
- 两种新建方法 1n  BigInt("1")
- typeof bigint
- 不支持 隐式类型转换 强制类型转换 BigInt（）
- number 和 BigInt 相加 报错， 不能混  强制类型转换



img 设置 float ， img 脱离文档流居于左侧
- 没有完全离开文档流
    浮动元素不止影响自己（脱离文档流）， 他还会影响周围的元素对其（左或右）进行环绕
- block（p 兄弟 不受影响）img 离开了文档流，所以block 无视img
- 让inline 元素 （文本，element createElement('p') document.createTextNode('文本') ）围绕float元素来实现浮动布局。
- 文字环绕效果是float 典型的应用

## float 元素特性

1。 块级框
    不管是行内还是块级，如果被设计了浮动， 浮动元素会生成一个块级框（盒子能力block inline-block），

    一旦浮动， 立刻会像inline元素一样产生包裹性，宽度会跟随内容适应（inline） 多列布局（菜单）

2.高度塌陷
    block 宽度100%
    高度呢？ 是内容，文档流加高的 计算好来 父容器有多高？
    浮动元素 不参加父元素的高度计算

    
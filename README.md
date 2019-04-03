
# 🎉🎉🎉 layui 弹层组件 - layui.layer React 封装 V0.0.1 🎉🎉🎉

## 📦 安装

```bash
npm install https://github.com/duanc/react-layer.git --save
```

## 🔨 示例

```jsx
import Layer from 'react-layer';
   <Layer visible={isShow} onCancel={this.onCancel}>
            <span>测试数据</span>
   </Layer>
```

## 📚 文档

| 参数        | 说明   |  类型  | 默认值  |
| --------   | -----  | :----:  |:----:  |
| visible | 是否显示窗体 | Boolean | false |
| shade  | 遮罩 即弹层外区域。例如0.3为透明度0.3的黑色背景('#000')  |   number    |  0   |
| type | 基本层类型 可传入的值有：0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）   |  Number    |  0   |
| title  | 标题 弹出框的标题 |  string  |   -  |
| maxmin | 最大最小化 该参数值对该参数值对type:1 type:2 有效，默认显示最大小化按钮。 |Boolean|true|
| width |窗体宽度 |string| 800px|
| height |窗体高度 |string| 500px|
| onCancel | 当关闭窗体时回调方法 | function | - |
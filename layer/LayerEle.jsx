import React, {Component} from 'react';

import layer from './layer';

export default class Layer extends Component {

    componentDidMount() {
        console.log('執行了Layer');
        console.log(layer)
    }

    showWindow = () => {
        layer.open({
            type: 1,
            title: '欢迎页',
            maxmin: true,
            area: ['800px', '500px'],
            content: 'http://layer.layui.com/test/welcome.html',
            end: function(){
                // layer.tips('Hi', '#about', {tips: 1})
            }
        });
    };

    render() {
        return (
            <div style={{color: '#0ff'}}>
                <button onClick={this.showWindow}>打开示例</button>
            </div>
        );
    }
}
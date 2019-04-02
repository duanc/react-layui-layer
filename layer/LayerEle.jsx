import React, {Component} from 'react';

import layer from './layer';

export default class Layer extends Component {


    constructor(props) {
        super(props);
        console.log('初始化构造器');
        console.log(props);
        this.state = {
            children:props.children.props.children,
            isShow: false
        };
    }

    componentDidMount() {
        console.log('執行了Layer');
        console.log(layer)
    }


    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        layer.open({
            type: 1,
            title: '欢迎页',
            maxmin: true,
            area: ['800px', '500px'],
            content:  $('#test'),
        });
    }

    showWindow = () => {
        layer.open({
            type: 2,
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
        // const {children} = this.prop;
        const {children} = this.state;
        // console.log(children1);
        console.log(children);
        return (
            <div id='test' style={{'display': 'none'}}>
                {children}
            </div>
        );
    }
}
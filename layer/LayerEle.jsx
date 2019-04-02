import React, {Component} from 'react';

import layer from './layer';

export default class Layer extends Component {


    constructor(props) {
        super(props);
        console.log('初始化构造器');
        console.log(props);
        this.state = {
            id: new Date().getTime(),
            children: props.children,
        };
        this.changWindow(props);
    }

    componentDidMount() {
        console.log('執行了Layer');
        console.log(layer)
    }


    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            children: nextProps.children,
        },() => {
            this.changWindow(nextProps);
        });


    }

    changWindow = (props) => {
        let rs = -1;
        if (props.visible){
            const {id} = this.state;
            rs = layer.open({
                shade: props.shade || 0,
                type: props.type || 1,
                title: props.title,
                maxmin: true,
                area: [props.width || '800px', props.height || '500px'],
                content: $('#' + id),
            });
        } else {
            layer.close(rs)
        }
        console.log(rs)
    };

    // showWindow = () => {
    //     layer.open({
    //         type: 2,
    //         title: '欢迎页',
    //         maxmin: true,
    //         area: ['800px', '500px'],
    //         content: 'http://layer.layui.com/test/welcome.html',
    //         end: function () {
    //             // layer.tips('Hi', '#about', {tips: 1})
    //         }
    //     });
    // };

    render() {
        // const {children} = this.prop;
        const {children, id} = this.state;
        // console.log(children1);
        console.log(children);
        return (
            <div id={id} style={{'display': 'none'}}>
                {children}
            </div>
        );
    }
}
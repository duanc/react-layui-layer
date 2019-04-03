import React, {Component} from 'react';

import layer from './layer';

export default class Layer extends Component {

    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            id: new Date().getTime(),
            children: props.children,
        };
        this.rsNum = -1;
    }

    componentDidMount() {
        this.changWindow(this.props);
    }


    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        this.setState({
            children: nextProps.children,
        }, () => {
            this.changWindow(nextProps);
        });
    }

    changWindow = (props) => {
        console.log(props);
        console.log(this.rsNum );
        if (props.visible && this.rsNum === -1) {
            const {id} = this.state;
            let content = $('#' + id);
            if (props.type===2){
                const {children} = this.state;
                content = children;
            }
            const rs = layer.open({
                shade: props.shade || 0,
                type: props.type || 1,
                title: props.title,
                maxmin: true,
                area: [props.width || '800px', props.height || '500px'],
                zIndex: layer.zIndex,
                success: function(layero){
                    layer.setTop(layero);
                },
                content,
                cancel: (index) => {
                    if (props.onCancel) {
                        props.onCancel();
                    }
                    return false;
                }
            });
            this.rsNum = rs;
        }

        if (!props.visible && this.rsNum !== -1) {
            layer.close(this.rsNum);
            this.rsNum = -1;
        }
    };

    render() {
        // const {children} = this.prop;
        const {children, id} = this.state;
        return (
            <div id={id} style={{'display': 'none'}}>
                {children}
            </div>
        );
    }
}
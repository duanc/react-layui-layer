import React, { Component } from 'react';
import layer from 'react';

export default class Layer extends Component {

    componentDidMount() {
        console.log('執行了Layer');
        console.log(layer)
    }

  render() {
    return (
      <div style={{color:'#0ff'}}>
                3333331213123123123<button>dsadasdasd</button>
      </div>
    );
  }
}
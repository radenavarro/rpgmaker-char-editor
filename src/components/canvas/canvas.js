import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component {
    constructor(...props){
        super(...props);
    }
    componentDidMount() {
        console.log("canvas" + JSON.stringify(this.props));
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        // ctx.fillRect(0,0, 100, 100);
    }

    render() {
        return (
            <canvas ref="canvas" width={145} height={145}/>
        );
    }
}

export default Canvas;

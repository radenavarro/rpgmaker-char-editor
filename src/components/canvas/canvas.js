import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component {
    constructor(...props){
        super(...props);
        this.imageUrl = 'img/';
    }
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        // ctx.fillRect(0,0, 100, 100);
        //Display head
        let base_image = new Image();
        base_image.src = this.imageUrl + "head" + this.props.character.head + ".png";
        base_image.onload = () => {
            ctx.drawImage(base_image, -56, -24, 225, 225);
        }

        //Display body
        let body_image = new Image();
        body_image.src = this.imageUrl + "body" + this.props.character.body + ".png";
        body_image.onload = () => {
            ctx.drawImage(body_image, -56, -24, 225, 225);
        }
    }

    render() {
        // this.updateCanvas();
        return (
            <canvas ref="canvas" width={145} height={145}/>
        );
    }
}

export default Canvas;

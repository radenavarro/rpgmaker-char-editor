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
        this.attributeDelimiter();
        //Display head
        this.displayHead(ctx);
        //Display body
        this.displayBody(ctx);
        //Display eyes
        this.displayEyes(ctx);
        //Display nose
        this.displayNose(ctx);
        // Display ears
        this.displayEars(ctx);
        //Display mouth
        this.displayMouth(ctx);
        //Display facial hair
        this.displayFacial(ctx);
        // Display hair
        this.displayHair(ctx);
    }

    attributeDelimiter(){
        // TODO: Limit graphics to those gathered from the database
    }

    displayHead(ctx){
        let head_image = new Image();
        head_image.src = this.imageUrl + "head" + this.props.character.head + ".png";
        head_image.onload = () => {
            ctx.drawImage(head_image, -56, -24, 225, 225);
        }
    }

    displayBody(ctx){
        let body_image = new Image();
        body_image.src = this.imageUrl + "body" + this.props.character.body + ".png";
        body_image.onload = () => {
            ctx.drawImage(body_image, -56, -24, 225, 225);
        }
    }

    // TODO: color de piel y forma adaptada tanto al cuerpo como a la cabeza
    displaySkin(ctx){
        let skin_image = new Image();
        skin_image.src = this.imageUrl + "skin" + this.props.character.skin + ".png";
        skin_image.onload = () => {
            ctx.drawImage(skin_image, -56, -24, 225, 225);
        }
    }

    displayHair(ctx){
        let hair_image = new Image();
        hair_image.src = this.imageUrl + "hair" + this.props.character.hair + ".png";
        hair_image.onload = () => {
            ctx.drawImage(hair_image, -56, -24, 225, 225);
        }
    }

    displayHairColor(ctx){
        let hairColor_image = new Image();
        hairColor_image.src = this.imageUrl + "hairColor" + this.props.character.hairColor + ".png";
        hairColor_image.onload = () => {
            ctx.drawImage(hairColor_image, -56, -24, 225, 225);
        }
    }

    displayEyebrows(ctx){
        let eyebrows_image = new Image();
        eyebrows_image.src = this.imageUrl + "eyebrows" + this.props.character.eyebrows + ".png";
        eyebrows_image.onload = () => {
            ctx.drawImage(eyebrows_image, -56, -24, 225, 225);
        }
    }

    // TODO: color de cejas para cada tipo de ceja
    displayEyebrowsColor(ctx){
        let eyebrowsColor_image = new Image();
        eyebrowsColor_image.src = this.imageUrl + "eyebrowsColor" + this.props.character.eyebrowsColor + ".png";
        eyebrowsColor_image.onload = () => {
            ctx.drawImage(eyebrowsColor_image, -56, -24, 225, 225);
        }
    }

    displayEyes(ctx){
        let eyes_image = new Image();
        eyes_image.src = this.imageUrl + "eyes" + this.props.character.eyes + ".png";
        eyes_image.onload = () => {
            ctx.drawImage(eyes_image, -56, -24, 225, 225);
        }
    }

    displayNose(ctx){
        let nose_image = new Image();
        nose_image.src = this.imageUrl + "nose" + this.props.character.nose + ".png";
        nose_image.onload = () => {
            ctx.drawImage(nose_image, -56, -24, 225, 225);
        }
    }

    displayMouth(ctx){
        let mouth_image = new Image();
        mouth_image.src = this.imageUrl + "mouth" + this.props.character.mouth + ".png";
        mouth_image.onload = () => {
            ctx.drawImage(mouth_image, -56, -24, 225, 225);
        }
    }

    displayFacial(ctx){
        let facial_image = new Image();
        facial_image.src = this.imageUrl + "facial" + this.props.character.facial + ".png";
        facial_image.onload = () => {
            ctx.drawImage(facial_image, -56, -24, 225, 225);
        }
    }

    displayEars(ctx){
        let ears_image = new Image();
        ears_image.src = this.imageUrl + "head" + this.props.character.ears + ".png";
        ears_image.onload = () => {
            ctx.drawImage(ears_image, -56, -24, 225, 225);
        }
    }

    displayClothes(ctx){
        let clothes_image = new Image();
        clothes_image.src = this.imageUrl + "clothes" + this.props.character.clothes + ".png";
        clothes_image.onload = () => {
            ctx.drawImage(clothes_image, -56, -24, 225, 225);
        }
    }

    displayComplements(ctx){
        let complements_image = new Image();
        complements_image.src = this.imageUrl + "complements" + this.props.character.complements + ".png";
        complements_image.onload = () => {
            ctx.drawImage(complements_image, -56, -24, 225, 225);
        }
    }

    render() {
        return (
            <canvas ref="canvas" width={145} height={145}/>
        );
    }
}

export default Canvas;

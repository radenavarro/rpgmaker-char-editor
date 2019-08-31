import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component {
    constructor(...props){
        super(...props);
        this.imageUrl = 'img/';
        this.imageExtension = ".png";
    }

    componentWillMount(){
        let char = {};
        console.log("busca diferencias")
        console.log(`url("${this.imageUrl}head${this.props.character.head.type}.png")`)
        if(this.props.character){
            char.body = {
                backgroundImage : `url("${this.imageUrl}head${this.props.character.head.type + this.imageExtension})`
            }
        }
        console.log(char);
    }

    render() {
        // TODO: según el tipo de pelo, cambiar z-index de orejas a un valor superior a este o inferior
        const styles = {
            head : {
                backgroundImage : `url("${this.imageUrl}head${this.props.character.head.type}.png")`,
                zIndex: this.props.character.head.zIndex
            },
            body : {
                backgroundImage : `url("${this.imageUrl}body${this.props.character.body.type}.png")`,
                zIndex: this.props.character.body.zIndex
            },
            bodySkin : {
                backgroundImage : `url("${this.imageUrl}clothes${this.props.character.skin.type}.png")`,
                zIndex: 3
            },
            hair : {
                backgroundImage : `url("${this.imageUrl}hair${this.props.character.hair.type}.png")`,
                zIndex: this.props.character.hair.zIndex
            },
            hairColor : {
                backgroundImage : `url("${this.imageUrl}hairColor${this.props.character.hairColor.type}.png")`,
                zIndex: 9
            },
            eyebrows : {
                backgroundImage : `url("${this.imageUrl}eyebrows${this.props.character.eyebrows.type}.png")`,
                zIndex: this.props.character.eyebrows.zIndex
            },
            eyebrowsColor : {
                backgroundImage : `url("${this.imageUrl}eyebrowsColor${this.props.character.eyebrowsColor.type}.png")`,
                zIndex: 9
            },
            eyes : {
                backgroundImage : `url("${this.imageUrl}eyes${this.props.character.eyes.type}.png")`,
                zIndex: this.props.character.eyes.zIndex
            },
            eyeColor : {
                backgroundImage : `url("${this.imageUrl}eyeColor${this.props.character.eyeColor}.png")`,
                zIndex: 5
            },
            nose : {
                backgroundImage : `url("${this.imageUrl}nose${this.props.character.nose.type}.png")`,
                zIndex: this.props.character.nose.zIndex
            },
            ears : {
                backgroundImage : `url("${this.imageUrl}ears${this.props.character.ears.type}.png")`,
                zIndex: this.props.character.ears.zIndex
            },
            clothes : {
                backgroundImage : `url("${this.imageUrl}clothes${this.props.character.clothes.type}.png")`,
                zIndex: this.props.character.clothes.zIndex
            },
            mouth : {
                backgroundImage : `url("${this.imageUrl}mouth${this.props.character.mouth.type}.png")`,
                zIndex: this.props.character.mouth.zIndex
            },
            complements : {
                backgroundImage : `url("${this.imageUrl}complements${this.props.character.complements.type}.png")`,
                zIndex: this.props.character.complements.zIndex
            }
        }
        // console.log(styles.head);
        return (
            <div id={"canvas"}>
                <div id={"head"} style={styles.head}/>
                <div id={"body"} style={styles.body}/>
                <div id={"bodySkin"} style={styles.bodySkin}/>
                <div id={"hair"} style={styles.hair}/>
                <div id={"hairColor"} style={styles.hairColor}/>
                <div id={"eyes"} style={styles.eyes}/>
                <div id={"eyeColor"} style={styles.eyeColor}/>
                <div id={"eyebrows"} style={styles.eyebrows}/>
                <div id={"eyebrowsColor"} style={styles.eyebrowsColor}/>
                <div id={"nose"} style={styles.nose}/>
                <div id={"mouth"} style={styles.mouth}/>
                <div id={"ears"} style={styles.ears}/>
                <div id={"clothes"} style={styles.clothes}/>
                <div id={"complements"} style={styles.complements}/>
            </div>
            // <canvas ref="canvas" width={145} height={145}/>
        );
    }
}

export default Canvas;

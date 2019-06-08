import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component {
    constructor(...props){
        super(...props);
        this.imageUrl = 'img/';
    }

    render() {
        // TODO: según el tipo de pelo, cambiar z-index de orejas a un valor superior a este o inferior
        const styles = {
            head : {
                backgroundImage : `url("${this.imageUrl}head${this.props.character.head}.png")`,
                zIndex: 1
            },
            body : {
                backgroundImage : `url("${this.imageUrl}body${this.props.character.body}.png")`,
                zIndex: 2
            },
            bodySkin : {
                backgroundImage : `url("${this.imageUrl}clothes${this.props.character.clothes}.png")`,
                zIndex: 3
            },
            hair : {
                backgroundImage : `url("${this.imageUrl}hair${this.props.character.hair}.png")`,
                zIndex: 10
            },
            hairColor : {
                backgroundImage : `url("${this.imageUrl}hairColor${this.props.character.hairColor}.png")`,
                zIndex: 9
            },
            eyebrows : {
                backgroundImage : `url("${this.imageUrl}eyebrows${this.props.character.eyebrows}.png")`,
                zIndex: 9
            },
            eyebrowsColor : {
                backgroundImage : `url("${this.imageUrl}eyebrowsColor${this.props.character.eyebrowsColor}.png")`,
                zIndex: 9
            },
            eyes : {
                backgroundImage : `url("${this.imageUrl}eyes${this.props.character.eyes}.png")`,
                zIndex: 6
            },
            eyeColor : {
                backgroundImage : `url("${this.imageUrl}eyeColor${this.props.character.eyeColor}.png")`,
                zIndex: 5
            },
            nose : {
                backgroundImage : `url("${this.imageUrl}nose${this.props.character.nose}.png")`,
                zIndex: 7
            },
            ears : {
                backgroundImage : `url("${this.imageUrl}ears${this.props.character.ears}.png")`,
                zIndex: 12
            },
            clothes : {
                backgroundImage : `url("${this.imageUrl}clothes${this.props.character.clothes}.png")`,
                zIndex: 20
            },
            mouth : {
                backgroundImage : `url("${this.imageUrl}mouth${this.props.character.mouth}.png")`,
                zIndex: 5
            },
            complements : {
                backgroundImage : `url("${this.imageUrl}complements${this.props.character.complements}.png")`,
                zIndex: 40
            }
        }
        console.log(styles.head);
        return (
            <div id={"canvas"}>
                <div id={"head"} style={styles.head}></div>
                <div id={"body"} style={styles.body}></div>
                <div id={"bodySkin"} style={styles.bodySkin}></div>
                <div id={"hair"} style={styles.hair}></div>
                <div id={"hairColor"} style={styles.hairColor}></div>
                <div id={"eyes"} style={styles.eyes}></div>
                <div id={"eyeColor"} style={styles.eyeColor}></div>
                <div id={"eyebrows"} style={styles.eyebrows}></div>
                <div id={"eyebrowsColor"} style={styles.eyebrowsColor}></div>
                <div id={"nose"} style={styles.nose}></div>
                <div id={"mouth"} style={styles.mouth}></div>
                <div id={"ears"} style={styles.ears}></div>
                <div id={"clothes"} style={styles.clothes}></div>
                <div id={"complements"} style={styles.complements}></div>
            </div>
            // <canvas ref="canvas" width={145} height={145}/>
        );
    }
}

export default Canvas;

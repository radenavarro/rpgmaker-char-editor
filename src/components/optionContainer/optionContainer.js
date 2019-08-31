import React, { Component } from 'react';
import './optionContainer.css';
import Canvas from "../canvas/canvas";
import html2canvas from 'html2canvas';
import fileSaver from 'file-saver';
import {connect} from "react-redux";
import charService from '../../services/charService';

class OptionContainer extends Component {
    constructor(...props){
        super(...props);
        this.imageUrl = 'img/';
        this.imgExtension = '.png';
    }

    async componentWillMount(){
        if (!this.props.character){
            let char = new charService();
            this.charObj = await char.getCharConfig();
            // console.log(this.charObj.character)

            this.character = this.buildDefaultCharObj();

            this.props.dispatch({
                type: "UPDATE_CHARACTER",
                data: Object.assign({}, this.character)
    
            })
        }
    }

    /**
     * Method that saves a character, with transparent background
     */
    saveCharacter(){
        html2canvas(document.querySelector("#canvas"), {backgroundColor:null}).then((canvas) => {
            canvas.toBlob((blob) => {
                fileSaver.saveAs(blob, "generatedCharacter.png");
            });
        });
    }

    async nextOption(option){
        let character = Object.assign({}, this.props.character);
        console.log(character);

        switch (option) {
            case 'body':
                character.body.type++;
                break;
            case 'skin':
                character.skin.type++;
                break;
            case 'head':
                // await fetch(this.imageUrl + "head" + character.head.type + this.imgExtension, { method: 'HEAD' })
                // .then(res => {
                //     console.log(res)
                //     if (res.ok) {
                //         character.head.type++;
                //     } else {
                //         character.head.type = 1;
                //     }
                // }).catch(err => console.log('Error:', err));
                if(this.charObj){
                    console.log(Object.keys(this.charObj.character.heads[0]).length)
                    if(character.head.type <= Object.keys(this.charObj.character.heads[0]).length) {
                        character.head.type++;
                    }
                    else{
                        character.head.type = 1;
                    }
                    console.log("TYPE: " + character.head.type)
                }
                break;
            case 'hair':
                if(this.charObj){
                    // Valida array hairs fuera de límite, para cada head
                    if(character.hair.type <= Object.keys(this.charObj.character.heads[0][1].hairs[0]).length) {
                        character.hair.type++;
                        // console.log("EN VENTANA " + character.hair.type);
                    }
                    else{
                        character.hair.type = 1;
                        // console.log("LOOPBACK" + character.hair.type)
                    }
                }
                break;
            case 'hairColor':
                character.hairColor.type++;
                break;
            case 'eyebrows':
                if(this.charObj){
                    if(character.eyebrows.type <= Object.keys(this.charObj.character.eyebrows[0]).length) {
                        character.eyebrows.type++;
                    }
                    else{
                        character.eyebrows.type = 1;
                    }
                }
                break;
            case 'eyebrowsColor':
                character.eyebrowsColor.type++;
                break;
            case 'eyes':
                if(this.charObj){
                    if(character.eyes.type <= Object.keys(this.charObj.character.eyes[0]).length) {
                        character.eyes.type++;
                    }
                    else{
                        character.eyes.type = 1;
                    }
                }
                break;
            case 'nose':
                if(this.charObj){
                    if(character.nose.type <= Object.keys(this.charObj.character.noses[0]).length) {
                        character.nose.type++;
                    }
                    else{
                        character.nose.type = 1;
                    }
                }
                break;
            case 'ears':
                if(this.charObj){
                    if(character.ears.type <= Object.keys(this.charObj.character.ears[0]).length) {
                        character.ears.type++;
                    }
                    else{
                        character.ears.type = 1;
                    }
                }
                break;
            case 'mouth':
                if(this.charObj){
                    if(character.mouth.type <= Object.keys(this.charObj.character.mouths[0]).length) {
                        character.mouth.type++;
                    }
                    else{
                        character.mouth.type = 1;
                    }
                }
                break;
            case 'facial':
                character.facial.type++;
                break;
            case 'clothes':
                character.clothes.type++;
                break;
            case 'complements':
                character.complements.type++;
                break;
        }

        this.props.dispatch({
            type: "UPDATE_CHARACTER",
            data: character
        })
    }
    previousOption(option){
        let character = Object.assign({}, this.props.character);
        // console.log(charObj);
        switch (option) {
            case 'body':
                if(this.charObj){
                    if(character.body.type > 1) {
                        character.body.type--;
                    }
                    else{
                        character.body.type = ((Object.keys(this.charObj.character.bodies[0]).length)+1)
                    }
                }
                break;
            case 'skin':
                character.skin.type--;
                break;
            case 'head':
                if(this.charObj){
                    if(character.head.type > 1) {
                        character.head.type--;
                    }
                    else{
                        character.head.type = ((Object.keys(this.charObj.character.heads[0]).length)+1)
                    }
                }
                break;
            case 'hair':
                if(this.charObj){
                    // Valida array hairs fuera de límite, para cada head
                    if(character.hair.type > 1) {
                        // console.log("EN VENTANA " + character.hair.type);
                        character.hair.type--;
                    }
                    else{
                        character.hair.type = ((Object.keys(this.charObj.character.heads[0][1].hairs[0]).length)+1)
                        // console.log("LOOPBACK" + character.hair.type)
                    }
                }
                break;
            case 'hairColor':
                character.hairColor.type--;
                break;
            case 'eyebrows':
                character.eyebrows.type--;
                break;
            case 'eyebrowsColor':
                character.eyebrowsColor.type--;
                break;
            case 'eyes':
                if(this.charObj){
                    if(character.eyes.type > 1) {
                        character.eyes.type--;
                    }
                    else{
                        character.eyes.type = ((Object.keys(this.charObj.character.eyes[0]).length)+1)
                    }
                }
                break;
            case 'nose':
                if(this.charObj){
                    if(character.nose.type > 1) {
                        character.nose.type--;
                    }
                    else{
                        character.nose.type = ((Object.keys(this.charObj.character.noses[0]).length)+1)
                    }
                }
                break;
            case 'ears':
                if(this.charObj){
                    if(character.ears.type > 1) {
                        character.ears.type--;
                    }
                    else{
                        character.ears.type = ((Object.keys(this.charObj.character.ears[0]).length)+1)
                    }
                }
                break;
            case 'mouth':
                character.mouth.type--;
                break;
            case 'facial':
                character.facial.type--;
                break;
            case 'clothes':
                character.clothes.type--;
                break;
            case 'complements':
                character.complements.type--;
                break;
        }
        this.props.dispatch({
            type: "UPDATE_CHARACTER",
            data: character
        })
    }
    buildDefaultCharObj(){
        if(this.charObj){
            let prueba = {type : 1, zIndex : this.charObj.character.heads[0][1].zIndex}
            // console.log(prueba)
            return {
                body : {type : 1, zIndex : this.charObj.character.bodies[0][1].zIndex},
                skin : "caucasian",
                head: {type : 1, zIndex : this.charObj.character.heads[0][1].zIndex},
                hair: {type : 1, zIndex : this.charObj.character.heads[0][1].hairs[0][1].zIndex},
                hairColor: "black",
                eyebrows: {type : 1, zIndex : this.charObj.character.eyebrows[0][1].zIndex},
                eyebrowsColor: "black",
                eyes: {type : 1, zIndex : this.charObj.character.eyes[0][1].zIndex},
                nose: {type : 1, zIndex : this.charObj.character.noses[0][1].zIndex},
                ears: {type : 1, zIndex : this.charObj.character.ears[0][1].zIndex},
                mouth: {type : 1, zIndex : this.charObj.character.mouths[0][1].zIndex},
                facial: {type : 1, zIndex : this.charObj.character.heads[0][1].facials[0][1].zIndex},
                clothes: {type : 1, zIndex : this.charObj.character.bodies[0][1].clothes[0][1].zIndex},
                complements: {type : 1, zIndex : this.charObj.character.complements[0][1].zIndex}
            }
        }
    }
    render() {
        console.log("PROPS en render")
        console.log(this.props.character)
        
        return (
            <div id="optionContainer">
                <div id="options">

                    <div className="subOption">
                        <span>Piel</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'skin')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'skin')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Complexión</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'body')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'body')}></i>
                        </div>    
                    </div>

                    <div className="subOption">
                        <span>Cabeza</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'head')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'head')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Pelo</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'hair')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'hair')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Color de pelo</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'hairColor')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'hairColor')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Cejas</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'eyebrows')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'eyebrows')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Color de cejas</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'eyebrowsColor')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'eyebrowsColor')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Ojos</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'eyes')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'eyes')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Nariz</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'nose')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'nose')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Boca</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'mouth')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'mouth')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Orejas</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'ears')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'ears')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Vello facial</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'facial')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'facial')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Vestimenta</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'clothes')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'clothes')}></i>
                        </div>
                    </div>

                    <div className="subOption">
                        <span>Complementos</span>
                        <div className="controls">
                            <i className="fas fa-angle-left" onClick={this.previousOption.bind(this, 'complements')}></i>
                            <i className="fas fa-angle-right" onClick={this.nextOption.bind(this, 'complements')}></i>
                        </div>
                    </div>

                    <button onClick={this.saveCharacter}>Guardar</button>
                </div>
                {this.character ? 
                <Canvas character={this.props.character ? this.props.character : this.character.default} /> 
                : ""}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("State to props")
    // console.log(state.character)
    return{
        character: state.character
    }
};

export default connect(mapStateToProps)(OptionContainer);

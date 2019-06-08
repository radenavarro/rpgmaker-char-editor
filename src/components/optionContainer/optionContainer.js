import React, { Component } from 'react';
import './optionContainer.css';
import Canvas from "../canvas/canvas";
import html2canvas from 'html2canvas';
import fileSaver from 'file-saver';

class OptionContainer extends Component {
    constructor(...props){
        super(...props);
        this.imageUrl = 'img/';
        this.imgExtension = '.png';
    }
    state = {
        character : {
            skin : 1,
            body: 1,
            head: 1,
            hair: 1,
            hairColor: 1,
            eyebrows: 1,
            eyebrowsColor: 1,
            eyes: 1,
            nose: 1,
            ears: 1,
            mouth: 1,
            facial: 1,
            clothes: 1,
            complements: 1
        }
    };

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
        let character = Object.assign({}, this.state.character);
        // console.log(charObj);
        switch (option) {
            case 'body':
                character.body++;
                break;
            case 'skin':
                character.skin++;
                break;
            case 'head':
                await fetch(this.imageUrl + "head" + character.head + this.imgExtension, { method: 'HEAD' })
                .then(res => {
                    if (res.ok) {
                        character.head++;
                    } else {
                        character.head = 1;
                    }
                }).catch(err => console.log('Error:', err));
                break;
            case 'hair':
                character.hair++;
                break;
            case 'hairColor':
                character.hairColor++;
                break;
            case 'eyebrows':
                character.eyebrows++;
                break;
            case 'eyebrowsColor':
                character.eyebrowsColor++;
                break;
            case 'eyes':
                character.eyes++;
                break;
            case 'nose':
                character.nose++;
                break;
            case 'ears':
                character.ears++;
                break;
            case 'mouth':
                character.mouth++;
                break;
            case 'facial':
                character.facial++;
                break;
            case 'clothes':
                character.clothes++;
                break;
            case 'complements':
                character.complements++;
                break;
        }
        this.setState(
            () =>({
                character
            })
        );
    }
    previousOption(option){
        let character = Object.assign({}, this.state.character);
        // console.log(charObj);
        switch (option) {
            case 'body':
                character.body--;
                break;
            case 'skin':
                character.skin--;
                break;
            case 'head':
                character.head--;
                break;
            case 'hair':
                character.hair--;
                break;
            case 'hairColor':
                character.hairColor--;
                break;
            case 'eyebrows':
                character.eyebrows--;
                break;
            case 'eyebrowsColor':
                character.eyebrowsColor--;
                break;
            case 'eyes':
                character.eyes--;
                break;
            case 'nose':
                character.nose--;
                break;
            case 'ears':
                character.ears--;
                break;
            case 'mouth':
                character.mouth--;
                break;
            case 'facial':
                character.facial--;
                break;
            case 'clothes':
                character.clothes--;
                break;
            case 'complements':
                character.complements--;
                break;
        }
        this.setState(
            () =>({
                character
            })
        );
    }
    render() {
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
                <Canvas character={this.state.character}/>
            </div>
        );
    }
}

export default OptionContainer;

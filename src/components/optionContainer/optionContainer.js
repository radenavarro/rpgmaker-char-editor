import React, { Component } from 'react';
import './optionContainer.css';
import Canvas from "../canvas/canvas";
import html2canvas from 'html2canvas';
import fileSaver from 'file-saver';

class OptionContainer extends Component {
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

    saveCharacter(){
        html2canvas(document.querySelector("#canvas")).then((canvas) => {
            canvas.toBlob((blob) => {
                fileSaver.saveAs(blob, "generatedCharacter.png");
            });
        });
    }

    nextOption(option){
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
                character.head++;
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
                    <span>Piel</span>
                    <i onClick={this.previousOption.bind(this, 'skin')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'skin')}>&gt;</i>
                    <br/>

                    <span>Complexión</span>
                    <i onClick={this.previousOption.bind(this, 'body')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'body')}>&gt;</i>
                    <br/>

                    <span>Cabeza</span>
                    <i onClick={this.previousOption.bind(this, 'head')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'head')}>&gt;</i>
                    <br/>

                    <span>Pelo</span>
                    <i onClick={this.previousOption.bind(this, 'hair')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'hair')}>&gt;</i>
                    <br/>

                    <span>Color de pelo</span>
                    <i onClick={this.previousOption.bind(this, 'hairColor')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'hairColor')}>&gt;</i>
                    <br/>

                    <span>Cejas</span>
                    <i onClick={this.previousOption.bind(this, 'eyebrows')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'eyebrows')}>&gt;</i>
                    <br/>

                    <span>Color de cejas</span>
                    <i onClick={this.previousOption.bind(this, 'eyebrowsColor')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'eyebrowsColor')}>&gt;</i>
                    <br/>

                    <span>Ojos</span>
                    <i onClick={this.previousOption.bind(this, 'eyes')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'eyes')}>&gt;</i>
                    <br/>

                    <span>Nariz</span>
                    <i onClick={this.previousOption.bind(this, 'nose')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'nose')}>&gt;</i>
                    <br/>

                    <span>Boca</span>
                    <i onClick={this.previousOption.bind(this, 'mouth')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'mouth')}>&gt;</i>
                    <br/>

                    <span>Vello facial</span>
                    <i onClick={this.previousOption.bind(this, 'facial')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'facial')}>&gt;</i>
                    <br/>

                    <span>Vestimenta</span>
                    <i onClick={this.previousOption.bind(this, 'clothes')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'clothes')}>&gt;</i>
                    <br/>

                    <span>Complementos</span>
                    <i onClick={this.previousOption.bind(this, 'complements')}>&lt;</i>
                    <i onClick={this.nextOption.bind(this, 'complements')}>&gt;</i>
                    <br/>

                    <button onClick={this.saveCharacter}>Guardar</button>
                </div>
                <Canvas character={this.state.character}/>
            </div>
        );
    }
}

export default OptionContainer;

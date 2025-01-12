import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log('Child constructor')
    }
    connectedCallback(){
        console.log('Child connectedCallback')
        throw new Error('loading of child component failed')
    } 
    renderedCallback(){
        console.log('Child renderedCallback')
    }
    disconnectedCallback(){
        alert('Child disconnectedCallback')
    }
}
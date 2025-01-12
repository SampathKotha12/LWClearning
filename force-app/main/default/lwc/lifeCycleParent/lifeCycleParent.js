import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    name='sample'
    showChild=false
    constructor(){
        super()
        console.log('Parent constructor')
    }
    connectedCallback(){
        console.log('Parent connectedCallback')
    } 
    renderedCallback(){
        console.log('Parent renderedCallback')
    } 
    disconnectedCallback(){
        console.log('Parent disconnectedCallback')
    }
    changeHandler(event){
        this.name=event.target.value
    }
    handleClick(){
        this.showChild=!this.showChild
    }
    errorCallback(error, stack){
        console.log(error.message)
        console.log(stack)
    }
}
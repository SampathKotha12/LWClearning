import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethod.html'

export default class RenderMethod extends LightningElement {
    render(){
        return this.selectedButton==='signup'?signupTemplate:this.selectedButton==='signin'?signinTemplate:renderTemplate
    
    }
    selectedButton=''
    handleClick(event){
        this.selectedButton=event.target.label
    }
    submitHandler(event){
        console.log(`${event.target.label} successful`)
    }
}
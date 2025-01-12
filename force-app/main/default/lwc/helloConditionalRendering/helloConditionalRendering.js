import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible=false
    handleClick(){
        this.isVisible=!this.isVisible
    }
    changeHandler(event){
        if(event.target.value==="hello"){
            this.isVisible=true
        }else{
            this.isVisible=false
        }
    }
}
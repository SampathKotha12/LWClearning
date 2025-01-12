import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {

    changeSlotHandler(){
        const footerElem=this.template.querySelector('.slds-card__footer')
        if(footerElem){
            footerElem.classList.remove('slds-hide')
        }
    }
}
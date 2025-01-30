import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToLWC extends NavigationMixin(LightningElement) {
    defination={
        componentDef:'c:navigationLwcTarget',
        attributes:{
            recordId:'12345'
        }
    }
    navigateToLWC(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(this.defination))
            }
        })
    }
}
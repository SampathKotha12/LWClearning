import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';

export default class NavigateCurrentPage extends LightningElement {
    @wire(CurrentPageReference)
    pageRef
    get curPageref(){
        return this.pageRef?JSON.stringify(this.pageRef, null, 2):''
    }
}
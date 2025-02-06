import { LightningElement, wire } from 'lwc';
import filterAccountByType from '@salesforce/apex/AccountController.filterAccountByType'

export default class WireApexWithParams extends LightningElement {
    selectedType=''
    @wire(filterAccountByType, {type:'$selectedType'})
    filteredAccounts

    get typeOptions(){
        return[
            {label:'Channel',value:'Channel'},
            {label:'Direct',value:'Direct'}
        ]
    }

    typeHandler(event){
        this.selectedType=event.target.value
    }
}
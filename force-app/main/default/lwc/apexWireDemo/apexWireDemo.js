import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'

export default class ApexWireDemo extends LightningElement {
    accountList
    @wire(getAccountList)
    accounts

    @wire(getAccountList)
    accountsHandler(data, error){
        if(data){
            this.accountList=data.map(item=>{
                let newType=item.type==='Customer - Channel'? 'Channel' :
                item.type==='Customer - Direct'? 'Direct' :
                 item.type==='Prospect'? 'Prospect' : '--------';
                 return {...item, newType}
            })
        }
        if(error){
            console.error(error)
        }
    }
}
import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Notifications extends LightningElement {
    toastHandler(){
        // const event=new ShowToastEvent({
        //     title:'Success!!',
        //     message:'Account created',
        //     variant:'Success'
        // })
        // this.dispatchEvent(event);
        this.showToast('Success!!', '{0} Account created {1}', 'success')
    }

    toastHandler2(){
        // const event=new ShowToastEvent({
        //     title:'Error!!',
        //     message:'Account created',
        //     variant:'error'
        // })
        // this.dispatchEvent(event);
        this.showToast('Error!!', 'Account not created', 'error')
    }

    toastHandler3(){
        this.showToast('Warning!!', 'Password should have special chars', 'warning')
    }
    toastHandler4(){
        this.showToast('Info!!', 'Summer is coming', 'info')
    }

    showToast(title, message, type){
    const event=new ShowToastEvent({
        title,
        message,
        variant:type,
        messageData:[
            'Salesforce',{
                url:'www.salesforce.com',
                label:'Click here'
            }
        ],
        mode:'sticky'
    })
    this.dispatchEvent(event)
}
}
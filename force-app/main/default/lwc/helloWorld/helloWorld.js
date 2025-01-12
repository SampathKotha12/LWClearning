import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    //data binding
    fullName="sampath kotha"
    title="aura"

    changeHandler(event){
        this.title=event.target.value
    }
    //

    
    //@track
    address={
        city: "kolkata",
        state: "Westbengal",
        country: "india"
    }

    trackHandler(){
        this.address={...this.address, "city":event.target.value}
    }
    //


    //getters
    users=["john", "grisham", "book"]
    num1=10
    num2=20
    get firstUser(){
        return this.users[0]
    }

    get multiplyNums(){
        return this.num1*this.num2
    }
}
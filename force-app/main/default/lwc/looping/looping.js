import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList=["ford", "audi", "maruti", "toyota", "bmw","honda"]

    ceoList=[
        {
            id:1,
            name:"sampath",
            company:"sfdc"
        },
        {
            id:2,
            name:"rakesh",
            company:"salesforce"
        },
        {
            id:3,
            name:"vishal",
            company:"cli"
        },
        {
            id:4,
            name:"kiran",
            company:"vlocity"
        }
    ]
}
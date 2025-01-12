import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames=["john","jane","sally","mark","jim"]
    fetchDetailHandler(){
        const elem=this.template.querySelector('h1')
        elem.style.border="1px solid red"
        console.log(elem.innerText)
        const userElements=this.template.querySelectorAll('.name')
        //console.log(elem.innerText)
        Array.from(userElements).forEach(item => {
            console.log(item.innerText)
            item.setAttribute("title", item.innerText)
        });
        Array.from(userElements).forEach(function(currentItem, index, array){
            console.log(currentItem.innerText)
        })
        //lwc:dom="manual" demo
        const childElem=this.template.querySelector('.child')
        childElem.innerHTML='<p>hey i am a child element</p>'
    }

}
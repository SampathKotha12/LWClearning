import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={

    }//for storing answers
    correctAnswers=0//for storing correct answers
    isSubmitted=false//use to show the result
    myQuestions=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map:loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invalid in LWC component folder",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which one of the following is not a directive",
            answers:{
                a:"for:each",
                b:"lwc:if",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]
    // change handler gets called for every click of the options
    changeHandler(event){
        console.log(event.target.name)
        console.log(event.target.value)
        const {name, value}=event.target
        //const name=event.target.name
        //const value=event.target.value
        this.selected={...this.selected, [name]:value}

    }
    //to hide or show submit
    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length) 
    }
    //form submit handler
    submitHandler(event){
        event.preventDefault()//to prevent refresh
        let correct=this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer)
        this.correctAnswers=correct.length
        this.isSubmitted=true
        console.log("this.correctAnswers", this.correctAnswers)
    }
    //reset form handler
    resetHandler(){
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted=false
    }
    //for applying dynamic styling
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?
            `slds-text-color_success`:
            `slds-text-color_error`
        }`
    }
}
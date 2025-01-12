import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.description'
import DESCRIPTION_TWO from '@salesforce/label/c.description_2'

export default class CustomLabelsDemo extends LightningElement {
    //descriptionOne=DESCRIPTION_ONE
    LABELS={
        descriptionOne:DESCRIPTION_ONE,
        descriptionTwo:DESCRIPTION_TWO
    }
}
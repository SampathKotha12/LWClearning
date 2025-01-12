import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'
import hasShowDetails from '@salesforce/customPermission/Show_Details'

export default class CheckPermissionDemo extends LightningElement {
    get hasViewAllData() {
        return hasViewAllData
    }
    get hasShowDetails() {
        return hasShowDetails
    }
}
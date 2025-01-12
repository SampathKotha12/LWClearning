import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id'
import IS_GUEST from '@salesforce/user/isGuest'

export default class CurrentUserInfo extends LightningElement {
    isGuestUser=IS_GUEST
    userId=ID
}
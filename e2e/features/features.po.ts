import {Selector, t} from 'testcafe';

export class FeaturesPageObject {

    // Selectors
    emailAddressField = Selector('#id_login');
    passwordField= Selector('#id_password');
    loginBtn = Selector('#modal-login-button');
    announcementWrapper = Selector('.announcements-wrapper');
    announcementElement = this.announcementWrapper.find('.kt-modal__container');
    announcementCloseBtn = this.announcementWrapper.find('button').withExactText('Close');
    basketUploadFileElement = Selector('.basket--upload-file');
    uploadFileElement = this.basketUploadFileElement.find('input[type="file"]');
    basketLineElement = Selector('.basket-line');
    basketTitleElement = Selector('.inline-edit__fake');

    // Test data
    pageUrl = 'https://app.3yourmind.com';
    appleStlDir = '../assets/Apple.stl';
    email = 'mojib.maryam.1371@gmail.com';
    password = '3YourMindTest';

    // Methods

    /**
     * Login to application.
     * 
     * @param email - Email address.
     * @param password - Password.
     */
  async login(email:string, password:string){
       await t
        .typeText(this.emailAddressField, email)
        .typeText(this.passwordField, password)
        .click(this.loginBtn);
   }
}

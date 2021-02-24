import {FeaturesPageObject} from './features.po';

const features = new FeaturesPageObject();

fixture `Login and upload file`
    .page `${features.pageUrl}`;
test('Should login successfully', async t => {
    // Login
    await features.login(features.email, features.password);

    // Check if login is successful
    await t.expect(features.announcementElement.visible).ok();
});
test('Should successfully upload Apple STL file', async t => {
    // Login
    await features.login(features.email, features.password);

    // Close information pop-up window
    await t
    .click(features.announcementCloseBtn)

    // Upload file
    .setFilesToUpload(features.uploadFileElement, features.appleStlDir)

    // Check if the file has been successfully uploaded
    .expect(features.basketLineElement.visible).ok()
    .expect(features.basketTitleElement.textContent).eql('Apple');
});

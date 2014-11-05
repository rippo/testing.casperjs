phantom.page.injectJs('../Pages/Page.Login.js');

var loginPage = new LoginPage();

casper.test.begin('when I login as an unknown user', function (test) {

    loginPage.startOnLoginPage();
    loginPage.checkPage();

    loginPage.fillForm('', '');
    loginPage.submitForm();
    loginPage.checkUsernameValidation();
    loginPage.checkPasswordValidation();
    loginPage.checkPage();

    loginPage.fillForm('unknown@test.com', '');
    loginPage.submitForm();
    loginPage.checkPasswordValidation();
    loginPage.checkPage();

    loginPage.fillForm('unknown@test.com', 'test');
    loginPage.submitForm();
    loginPage.checkPage();

    casper.run(function () {
        test.done();
    });
});

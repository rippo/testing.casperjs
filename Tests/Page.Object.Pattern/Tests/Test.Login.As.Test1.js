/// <reference path="../Pages/Page.Login.js" />
/// <reference path="../Pages/Page.Account.js" />

phantom.page.injectJs('./tests/Page.Object.Pattern/Pages/Page.Login.js');
phantom.page.injectJs('./tests/Page.Object.Pattern/Pages/Page.Account.js');

var loginPage = new LoginPage();
var searchPage = new SearchPage();

casper.test.begin('when I login as test1', function (test) {

    loginPage.fullLogin('test1@test.com', '12345');

    searchPage.checkPage();
    searchPage.fillForm("");
    searchPage.submitForm();
    searchPage.checkValidationMesaageIsShown();

    searchPage.checkPage();
    searchPage.fillForm("a");
    searchPage.submitForm();
    searchPage.checkNumberResultsShown(3);

    searchPage.checkPage();
    searchPage.fillForm("b");
    searchPage.submitForm();
    searchPage.checkNumberResultsShown(1);

    casper.run(function () {
        test.done();
    });
});

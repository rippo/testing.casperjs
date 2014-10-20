function SearchPage() {

    this.checkPage = function () {
        casper.waitForSelector("#Query", function () {
            casper.test.assertUrlMatch('account/search', 'is on search page');
            casper.test.assertTextExists('Search', 'search title found');
        });
    };

    this.fillForm = function (query) {
        casper.then(function () {
            this.fillSelectors('form', {
                "input[name='Query']": query
            }, false);
        });
    };

    this.submitForm = function () {
        casper.then(function () {
            this.click('form input[type="submit"]', 'search button clicked');
        });
    };

    this.checkValidationMesaageIsShown = function () {
        casper.waitForSelector("#Query", function () {
            casper.test.assertTextExists('Enter a search term', 'validation message shown');
        });
    };

    this.checkNumberResultsShown = function (expectedCount) {
        casper.waitForSelector("table#results ", function () {
            casper.test.assertTextExists('Results', 'results are displayed');
            casper.test.assertElementCount('table#results > tbody > tr', expectedCount, expectedCount + ' names have been found');
        });
    };

}
function LoginPage() {

    this.startOnLoginPage = function () {
        //casper.echo("base url is : " + casper.cli.options.baseUrl);
        casper.start(casper.cli.options.baseUrl + '/account');
    };

    this.fullLogin = function(username, password) {
        this.startOnLoginPage();
        this.checkPage();
        this.fillForm(username, password);
        this.submitForm();
    };


    this.checkPage = function () {
        casper.waitForSelector("#Username", function () {
            casper.test.assertUrlMatch('account', 'is on login page');
            casper.test.assertExists('form', 'login page form has been found');
        });
    };

    this.fillForm = function (username, password) {
        casper.waitForSelector("#Username", function () {
            casper.fillSelectors('form', {
                "input[name='Username']": username,
                "input[name='Password']": password,
            }, false);
        });
    };

    this.submitForm = function () {
        casper.then(function () {
            casper.click('form input[type="submit"]', 'login submit button clicked');
        });
    };

    this.checkUsernameValidation = function() {
        casper.waitForSelector("#Username", function () {
            casper.test.assertTextExists("The Username field is required", "username required message shown");
        });
    }

    this.checkPasswordValidation = function () {
        casper.waitForSelector("#Username", function () {
            casper.test.assertTextExists("The Password field is required", "password required message shown");
        });
    }

}
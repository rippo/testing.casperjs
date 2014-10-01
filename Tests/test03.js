casper.test.begin('Contact Page', 5, function (test) {

    casper.start("http://localhost:43502/home/contact", function () {
        test.assertTitle("Contact - CasperJS Mvc");
        test.assertExists('form[action="/home/contact"]');

        this.fillSelectors('form', {
            "input[name='ContactName']": 'Richard Wilde',
        }, true);

    });

    casper.waitForUrl(/home\/contact/, function () {
        test.assertTextExists("The Email Address field is required", "Email required required is shown");
        this.fillSelectors('form', {
            "input[name='EmailAddress']": 'sss',
        }, true);
    });

    casper.waitForUrl(/home\/contact/, function () {
        test.assertTextExists("The Email Address field is not a valid e-mail address", "Email not valid is shown");
        this.fillSelectors('form', {
            "input[name='EmailAddress']": 'test@test.com',
        }, true);
    });

    casper.waitForUrl(/home\/thanks/, function () {
        test.assertTextExists("Thanks", "Thanks header is shown");
    });

    casper.run(function () {
        test.done();
    });
});

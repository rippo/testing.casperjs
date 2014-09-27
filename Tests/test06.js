casper.test.begin('Evaluate tests', 1, function (test) {

    casper.start('http://localhost:43502/Evaluate');

    casper.thenEvaluate(function () {
        $('#CountryList').val('United Kingdom').change();
    });

    casper.then(function () {
        test.assertTextExists("Selected country code: UK", "Selected country code: UK text exsists");
    });

    casper.run(function () { test.done(); });
});
casper.test.begin('Evaluate tests', 2, function (test) {

    casper.start('http://localhost:43502/evaluate');

    casper.thenEvaluate(function () {
        $('#CountryList').val('United Kingdom').change();
    });

    casper.then(function () {
        test.assertTextExists("Selected country code: UK", "Selected country code: UK text exists");
    });

    casper.thenEvaluate(function () {
        $('#CountryList').val('Spain').change();
    });

    casper.then(function () {
        test.assertTextExists("Selected country code: ES", "Selected country code: ES text exists");
    });

    casper.run(function () { test.done(); });
});
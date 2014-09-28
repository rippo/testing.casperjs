casper.test.begin('NAME', 1, function (test) {

    casper.start("http://www.google.co.uk", function () {
        test.assert(1 == 1, "1 equals 1");
    });

    casper.run(function () {
        test.done();
    });

});

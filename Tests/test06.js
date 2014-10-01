//Looping
casper.test.begin('Wizard', 101, function (test) {

    //initial 50 loops
    var loop = new Array();
    for (var i = 1; i <= 50; i++) {
        loop.push(i);
    }

    casper.start("http://localhost:43502/wizard/index/1");

    //notice loop forEach is inside a casper function...
    casper.then(function () {

        loop.forEach(function (item) {

            //All tests must be inside a casper function
            casper.then(function () {
                test.assertTitle("Wizard Step: " + item + " - CasperJS Mvc", "Title for wizard step " + item + " is the one expected");
            });

            casper.then(function () {
                this.fillSelectors('form', {}, true);
            });

            casper.then(function () {
                test.assertTextExists("The Answer field is required", "Validation error message is shown");
                this.fillSelectors('form', {
                    "input[name='Answer']": 'An answer',
                }, true);
            });

        });

    });

    casper.then(function () {
        test.assertTitle("Finished - CasperJS Mvc", "Finished title is the one expected");
    });

    casper.run(function () {
        test.done();
    });

});
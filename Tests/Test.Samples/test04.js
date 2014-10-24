casper.options.viewportSize = { width: 960, height: 600 };

casper.test.begin('Timings tests', 2, function (test) {

    casper.start('http://localhost:43502/Timings');

    casper.then(function () {
        test.assertExists("button#btnModal", "Launch button is shown");
        this.click("button#btnModal");
    });

    casper.wait(300, function () {
        this.capture("timings.jpg");
        test.assertVisible("#myModal");
    });

    casper.run(function () { test.done(); });
});

//Note we could use, waitUntilVisible why not try it? 
//    casper.waitUntilVisible("#myModal", function () {

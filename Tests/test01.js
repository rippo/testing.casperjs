casper.test.begin('Home Page Tests', 3, function (test) {

    casper.start("http://localhost:43502", function () {
        test.assertTitle("Home - CasperJS Mvc");
        test.assertTextExists("Casper MVC", "Casper MVC is present on page");
        test.assertTextExists("Ariya Hidayat", "Ariya Hidayat is present on page");
    });

    casper.run(function () {
        test.done();
    });

});

    casper.test.begin('Home Page Tests', 3, function suite(test) {

    casper.start("http://localhost:43502/", function () {
        test.assertTitle("Home - CasperJS Mvc", "Title for home page is the one expected");
        test.assertTextExists("Casper MVC", "Casper MVC is present on page");
        test.assertTextExists("Ariya Hidayat", "Ariya Hidayat is present on page");
    });

    casper.run(function () {
        test.done();
    });

});

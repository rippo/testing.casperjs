var casper = require('casper').create();

casper.start('http://www.wildesoft.net', function () {
    this.echo(this.getTitle());
});

casper.thenOpen('http://www.meetup.com/Smart-Devs-User-Group', function () {
    this.echo(this.getTitle());
    this.capture("meetup.jpg");
});

casper.run();
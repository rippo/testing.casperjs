var casper = require('casper').create();

casper.start('http://craftycoders.net/', function () {
    this.echo(this.getTitle());
});

casper.thenOpen('http://www.meetup.com/Crafty-Coders/', function () {
    this.echo(this.getTitle());
    this.capture("crafty.jpg");
});

casper.run();
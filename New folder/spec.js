// spec.js

var HomePage = require("./HomePage.js");
var PhonePage = require("./PhonePage.js");
describe('Protractor Demo App', function() {

	beforeEach(function() {
		angularHomepage = new HomePage();
        pPage = new PhonePage();
		angularHomepage.get();
	});

	it('gets all elements', function() {
		angularHomepage.findPhones().then(function(elements){
		return elements.length;
    })
    .then(function(count){
		console.log("...." + count);
		expect(count).toBeGreaterThan(0);
	});
	for(var i = 1; i<21;i++){
	    browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope']["+i+"]/a[2]")).click();
	    browser.findElement(by.xpath("//h1[@class='ng-binding ng-scope']")).getText().then(function(text){
	    	console.log(text);
	    });
        pPage.printName();
        pPage.imgSwitch();
	    angularHomepage.get();
	};
	
});
});
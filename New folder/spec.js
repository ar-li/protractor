// spec.js

var HomePage = require("./HomePage.js");
var PhonePage = require("./PhonePage.js");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 150000;
describe('Protractor Demo App', function() {

	beforeEach(function() {
		angularHomepage = new HomePage();
        pPage = new PhonePage();
		angularHomepage.get();
	});

	/*it('gets all elements', function() {
        expect(browser.getCurrentUrl()).toEqual('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
		angularHomepage.findPhones().then(function(elements){
		return elements.length;
    })
    .then(function(count){
		console.log("...." + count);
		expect(count).toBeGreaterThan(0);
	});
	for(var i = 1; i<20;i++){
        angularHomepage.goToPhone(i);
        browser.waitForAngular();
        pPage.printName();
       // pPage.imgSwitch();
	    angularHomepage.get();
	};
    });*/
/*	it('searches for a phone on the main page. Test-Search-001', function(){
		angularHomepage.searchPhone("XOOM");
		expect(browser.getCurrentUrl()).toBe('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
    });*/
    it('Sorts alphabetically. Test-Sort-001', function(){
		//var bool = angularHomepage.sortM("name");
		//expect(browser.getCurrentUrl()).toBe('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
        //expect(bool).toBe(true);
       // var compSort = angularHomepage.sortM();
      //  manSort = compSort.sort();
      //  expect(manSort).toEqual(compSort);
        a1 = angularHomepage.findPhones();
        expect
	});
	/*
	it('Opens a phone and checks if it\'s the chosen one. Test-Check-001', function(){
		var href = angularHomepage.goToPhone(4);
		expect(browser.getCurrentUrl()).toBe(href);
	});*/

});
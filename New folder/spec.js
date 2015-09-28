// spec.js
describe('Phone Page Testing start', function() {
    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 150000;

    var HomePage = require("./HomePage.js");
    var PhonePage = require("./PhonePage.js");

    var _ = require('lodash');
    // or a method category
    var array = require('lodash/array');
    // or a method (great for smaller builds with browserify/webpack)
    var chunk = require('lodash/array/chunk');

    var angularHomepage;
    var pPage;

	beforeEach(function() {
        angularHomepage    = new HomePage();
        pPage    = new PhonePage();
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
    /*it('Sorts alphabetically. Test-Sort-001', function(){
		//var bool = angularHomepage.sortM("name");
		//expect(browser.getCurrentUrl()).toBe('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
        //expect(bool).toBe(true);
       // var compSort = angularHomepage.sortM();
      //  manSort = compSort.sort();
      //  expect(manSort).toEqual(compSort);
        a1 = angularHomepage.findPhones();
	});*/
	/*
	it('Opens a phone and checks if it\'s the chosen one. Test-Check-001', function(){
		var href = angularHomepage.goToPhone(4);
		expect(browser.getCurrentUrl()).toBe(href);
	});*/
    it('Checks if the search results are OK', function(){
        var phoneTextHand = [];
        var phoneTextWeb = [];
        var searchQ;
        searchQ = "motorola";
        //checks the matched phones out of all (20)
        angularHomepage.countPhones().then(function(num) {
            for (var i = 1; i <= num; i++) {
                angularHomepage.findPhoneByOrder(i).getText().then(function(text){
                if (text.toLowerCase().indexOf(searchQ) !== -1){
                    phoneTextHand.push(text.toUpperCase());
                    //console.log(phoneText[0]);
                }
                })
            }
        });

        angularHomepage.searchPhone(searchQ);
        angularHomepage.selectDropdownByNumber(browser, 0, 1000);

        angularHomepage.countPhones().then(function(num) {
            for (var i = 1; i <= num; i++) {
                angularHomepage.findPhoneByOrder(i).getText().then(function (text) {
                    phoneTextWeb.push(text.toUpperCase());
                })
            }
        }).then(function() {
            expect(phoneTextWeb).toEqual(_.sortBy(phoneTextHand));
            //dump(_.sortBy(phoneTextWeb));
            console.log(phoneTextWeb);
            console.log(_.sortBy(phoneTextHand));
            //dump(phoneTextHand);
        });

        //expect(angularHomepage.findPhoneByOrder(1)).toEqual(20);
    });

});
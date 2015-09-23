// spec.js

var HomePage = require("./HomePage.js");
var PhonePage = require("./PhonePage.js");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 150000;
describe('Phone Page Testing start', function() {

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
       /*old// doubleCheck = angularHomepage.findPhoneByOrder(1);
        //angularHomepage.checkByName("4G");
        angularHomepage.checkByName1("4G");
            var doubleCheck;
        doubleCheck = angularHomepage.checkByName1("4G");
        expect(doubleCheck).toMatch("24G");

       // expect(doubleCheck instanceof Object).toBe(true);

        //expect(Array.isArray(doubleCheck)).toBe(true);
       // expect(doubleCheck).toMatch("4G");

        //expect(doubleCheck).toBeGreaterThan(0);*/
		var elementsByHand;
		var elementsBySearch;
        var phoneCount;
        var phoneText = [];
		//elementsByHand = angularHomepage.checkMotor();
		//elementsBySearch = angularHomepage.searchPhone("Motorola");
        //elementsBySearch.getText().then(function(text){
		//	console.log(text);
		//});
        /*angularHomepage.countPhones().then(function(num){
        expect(num).toEqual(20);
        for(var i = 1;i<=num;i++){
            angularHomepage.findPhoneByOrder(i).getText().then(function(text){
                //expect(text).toEqual("20");
            })
        };
        });*/
        angularHomepage.countPhones().then(function(num) {
            for (var i = 1; i <= num; i++) {
                angularHomepage.findPhoneByOrder(i).getText().then(function(text){
                if (text.toLowerCase().indexOf("motorola") !== -1){
                    phoneText.push(text);
                    //console.log(phoneText[0]);
                }
                })
            }
        }).then(function(){
        for (var i = 0; i<phoneText.length; i++){
            console.log(phoneText);
        }
        });
        //expect(angularHomepage.findPhoneByOrder(1)).toEqual(20);
    });

});
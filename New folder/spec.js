// spec.js
describe('Protractor Demo App', function() {

var AngularHomepage = function() {
	this.get = function() {
		browser.get('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
	};
	this.findPhones = function() {
		return element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp'));
	};
	this.findPhone = function(num) {
		return element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).get(num).click();
	};
};
var PhonePage = function() {
	var pName;
	this.getName = function() {
		pName = browser.findElement(by.xpath("//h1[@class='ng-binding ng-scope']")).getText();
		return pName;
	};
	this.printName = function() {
        this.getName().then(function(text){
			console.log(text);
		});
	};
	this.imgSwitch = function() {
        browser.driver.findElements(by.xpath("//li[@class='ng-scope']")).then(function(elems){
            for(i=1;i<elems.length;i++){
                elems[i].click();
            };
        });

	};
	};

	beforeEach(function() {
		angularHomepage = new AngularHomepage();
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
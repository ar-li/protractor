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

	beforeEach(function() {
		angularHomepage = new AngularHomepage();
		angularHomepage.get();
	});

	it('gets all elements', function() {
		angularHomepage = new AngularHomepage();

		angularHomepage.findPhones().then(function(elements){
		return elements.length;
    })
    .then(function(count){
		console.log("...." + count);
		expect(count).toBeGreaterThan(0);
	});
	for(var i = 1; i<21;i++){
	browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope']["+i+"]/a[2]")).click();
	angularHomepage.get();
	};
});
});
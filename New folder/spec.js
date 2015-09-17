// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));

  beforeEach(function() {
    browser.get('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
  });

  it('gets all elements', function() {
	  var el;
	element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp'))    .then(function(elements){
	  return elements.length;
    })
    .then(function(count){
      console.log("...." + count);
      expect(count).toBeGreaterThan(0);
  });
});
});
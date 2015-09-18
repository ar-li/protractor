var HomePage = function() {
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
module.exports = HomePage;
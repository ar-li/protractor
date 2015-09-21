var HomePage = function() {
    this.searchPhone = function(name){
        element(by.model("query")).sendKeys(name);
        browser.findElement(by.xpath("//ul[@class='phones']/li/a[text()='MOTOROLA XOOM\u2122']")).click();
        return browser.getCurrentUrl();
    };
    this.get = function() {
        browser.get('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
    };
    this.findPhones = function() {
        return element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp'));
    };
    this.findPhoneByOrder = function(num) {
        return element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).get(num).click();
    };
    this.goToPhone = function(i) {
        browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope']["+i+"]/a[2]")).click();
    };
    this.printName = function() {
        browser.findElement(by.xpath("//h1[@class='ng-binding ng-scope']")).getText().then(function(text){
            console.log(text);
        });
    };
};
module.exports = HomePage;
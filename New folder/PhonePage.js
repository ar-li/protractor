var PhonePage = function () {
    var pName;
    this.getName = function () {
        pName = browser.findElement(by.xpath("//h1[@class='ng-binding ng-scope']")).getText();
        return pName;
    };
    this.printName = function () {
        this.getName().then(function (text) {
            console.log(text);
        });
    };
    this.imgSwitch = function () {
        browser.driver.findElements(by.xpath("//li[@class='ng-scope']")).then(function (elems) {
            for (i = 1; i < elems.length; i++) {
                elems[i].click();
            }
            ;
        });

    };
};

module.exports = PhonePage;
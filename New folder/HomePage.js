var HomePage = function() {
    var chosenPhones = [];

    function alphabetical(a, b) {
        var A = a.toLowerCase();
        var B = b.toLowerCase();
        if (A < B) {
            return -1;
        } else if (A > B) {
            return 1;
        } else {
            return 0;
        }
    }

    this.selectDropdownByNumber = function (element, index, milliseconds) {
        element.findElements(by.tagName('option'))
            .then(function (options) {
                options[index].click();
            });
        if (typeof milliseconds != 'undefined') {
            browser.sleep(milliseconds);
        }
    };
    this.compareStrings = function (elements) {
        // attach the .equals method to Array's prototype to call it on any array
        Array.prototype.equals = function (array) {
            // if the other array is a falsy value, return
            if (!array)
                return false;

            // compare lengths - can save a lot of time
            if (this.length != array.length)
                return false;

            for (var i = 0, l = this.length; i < l; i++) {
                // Check if we have nested arrays
                if (this[i] instanceof Array && array[i] instanceof Array) {
                    // recurse into the nested arrays
                    if (!this[i].equals(array[i]))
                        return false;
                }
                else if (this[i] != array[i]) {
                    // Warning - two different object instances will never be equal: {x:20} != {x:20}
                    return false;
                }
            }
            return true;
        }

    };
    this.searchPhone = function (name) {
        element(by.model("query")).sendKeys(name);
        //browser.findElement(by.xpath("//ul[@class='phones']/li/a[text()='MOTOROLA XOOM\u2122']")).click();
        browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope']/a[2]"));
        return browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope']/a[2]"));
    };
    this.get = function () {
        browser.driver.get('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
    };
    this.findPhones = function () {
        var text1;
        var unsorted = element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).get(1).getText().then(function (text) {
            console.log(text);
            text1 = text;
        }).then(function () {
            console.log(text1);
            //console.log(unsorted);
        });
        var a2 = element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).get(5);
        a2.all(by.tagName("a")).getText().then(function (a3) {
            console.log(a3[1]);
        });
        // var more = element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).element.all(by.tagName("a"));
        // unsorted.getText().console.log(element.getText());
        return text1;
    };
    this.findPhoneByOrder = function (num) {
        //element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).get(num).click();
        return browser.findElement(by.xpath("//ul[@class='phones']//li[" + num + "]/a[2]"));

    };
    this.goToPhone = function (i) {
        var url = browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope'][" + i + "]/a[2]")).getAttribute("href");
        browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope'][" + i + "]/a[2]")).click();

        return url;
    };
    this.printName = function () {
        browser.findElement(by.xpath("//h1[@class='ng-binding ng-scope']")).getText().then(function (text) {
            console.log(text);
        });

    };
    this.sortAlpha = function () {
        var names = [];
        names = element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).then(function () {
            names.sort();
        });
        return names;
    };
    this.sortM = function () {
        //  element(by.cssContainingText('option', 'Alphabetical')).click();
        // browser.findElement(by.css("select>option[value='age']")).click();
        //browser.findElement(by.xpath("//select[@class='ng-valid ng-dirty ng-valid-parse ng-touched']/option[1]")).click();
        // browser.findElement(By.css('select>option[value=\'name\']')).click();
        this.selectDropdownByNumber(browser, 0, 1000);
        var compSort = [];
        for (var i = 1; i < 2; i++) {
            compSort[i] = this.findPhoneByOrder(i);
        }
        return compSort;

    };
    this.countPhones = function () {
        return element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).count();
    };
    /*this.checkByName1 = function(str) {
     var doubleCheck;
     element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).count().then(function (num) {
     for (var i = 1; i <= num; i++) {
     browser.findElement(by.xpath("//ul[@class='phones']//li[" + i + "]/a[2]")).getText().then(function (text) {
     if (text.indexOf(str) !== -1) {
     console.log(text);
     doubleCheck = text;
     }
     });
     }
     }).then(function(){
     console.log(doubleCheck);
     return doubleCheck;
     });
     };*/
    this.easy = function () {
        this.countPhones.then(function (num) {
            for (var i = 1; i = num; i++) {
                this.findPhoneByOrder(i).getText().then(function (text) {
                    console.log(text);
                });
            }
        });
    };
    this.findPhoneByName = function (phone) {
        return browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope'][" + i + "]/a[2]"));
    };
    this.checkMotor = function () { //sends back an object

    };
};
module.exports = HomePage;
"use strict";
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

    //Enters a text value that should result in the required phones
    this.searchPhone = function (name) {
        element(by.css("input.ng-valid")).sendKeys(name);
        //browser.findElement(by.xpath("//ul[@class='phones']/li/a[text()='MOTOROLA XOOM\u2122']")).click();
        //browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope']/a[2]"));
        //return browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope']/a[2]"));
    };
    //open the main page
    this.get = function () {
        browser.driver.get('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
    };
    //finds  the first phone
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
    //returns an "a" element that contains a link to the PhonePage and the name of the phone
    this.findPhoneByOrder = function (num) {
        //element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).get(num).click();
        return element(by.xpath("//ul[@class='phones']//li[" + num + "]/a[2]"));

    };
    //finds the needed
    this.goToPhone = function (i) {
        var url = browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope'][" + i + "]/a[2]")).getAttribute("href");
        browser.findElement(by.xpath("//li[@class='thumbnail phone-listing ng-scope'][" + i + "]/a[2]")).click();

        return url;
    };
    //Prints the name of
    //Counts the number of the phones that are shown
    this.countPhones = function () {
        return element.all(by.repeater('phone in phones | filter:query | orderBy:orderProp')).count();
    };
    //Function for testing
    this.easy = function () {
        this.countPhones.then(function (num) {
            for (var i = 1; i = num; i++) {
                this.findPhoneByOrder(i).getText().then(function (text) {
                    console.log(text);
                });
            }
        });
    };
};
module.exports = HomePage;
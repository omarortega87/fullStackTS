"use strict";
class Persons {
    constructor() { }
    msg = "";
    speak() {
        console.log(this.msg);
    }
}
const tom = new Persons();
tom.msg = "hello";
tom.speak();

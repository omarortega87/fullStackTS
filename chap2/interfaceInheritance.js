"use strict";
var InterfaceNamespace;
(function (InterfaceNamespace) {
    class Motorcycle {
        name;
        wheelCount = 0;
        constructor(name) {
            this.name = name;
        }
        updateWheelCount(newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
        showNumberOfWheels() {
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
        getFullName() {
            return `MC - ` + this.name;
        }
    }
    const moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));

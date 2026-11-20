"use strict";
var AbstractNamespace;
(function (AbstractNamespace) {
    class Vehicle {
        wheelCount;
        constructor(wheelCount) {
            this.wheelCount = wheelCount;
        }
        showNumberOfWheels() {
            console.log(`wheels: ${this.wheelCount}`);
        }
    }
    class Motorcycle extends Vehicle {
        constructor() {
            super(2);
        }
        updateWheelCount(newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
    }
    class Automobile extends Vehicle {
        constructor() {
            super(4);
        }
        updateWheelCount(newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log(`Automobile has ${this.wheelCount}`);
        }
    }
    const motorcycle = new Motorcycle();
    motorcycle.updateWheelCount(1);
    const automobile = new Automobile();
    automobile.updateWheelCount(3);
})(AbstractNamespace || (AbstractNamespace = {}));

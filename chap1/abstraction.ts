interface User {
  name: string;
  age: number;
  canDrive();
}

class Person implements User {
  name: string;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  canDrive() {
    console.log("User is:", this.name);
    if (this.age >= 16) {
      console.log("allow to drive");
    } else {
      console.log("do not allow to drive");
    }
  }
}

const jhon: User = new Person("John", 15);
jhon.canDrive();

class Persons {
  constructor() {}
  msg: string = "";
  speak() {
    console.log(this.msg);
  }
}

const tom = new Persons();
tom.msg = "hello";
tom.speak();

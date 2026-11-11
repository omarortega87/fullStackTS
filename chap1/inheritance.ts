class Item {
  id: string;
  description: string;
  price: number;

  constructor(id: string, description: string, price: number) {
    this.id = id;
    this.description = description;
    this.price = price;
  }

  getId(): string {
    return this.id;
  }
}

class Bicycle extends Item {
  wheelCount: number;

  constructor(
    wheelCount: number,
    id: string,
    description: string,
    price: number,
  ) {
    super(id, description, price);
    this.wheelCount = wheelCount;
  }

  getWheelCount(): number {
    return this.wheelCount;
  }
}

const bicycle = new Bicycle(2, "123", "Mountain Bike", 299.99);

console.log("id", bicycle.getId());
console.log("wheel count:", bicycle.getWheelCount());

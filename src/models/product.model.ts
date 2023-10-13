export enum Category {
  drinks = 1,
  alcools = 2,
  starters = 3,
  dishes = 4,
  deserts = 5,
}

export class Product {
  id: number = Date.now() + Math.floor(Math.random() * 10000);
  name: string;
  price = 0.0;
  pic: string;
  category: Category;
  quantity = 1;
  total_price = 0.0;

  constructor(
    name = '',
    price = 0,
    pic = '',
    category: Category = Category.alcools,
  ) {
    this.name = name;
    this.price = price;
    this.pic = pic;
    this.category = category;
  }

  public refresh() {
    this.total_price = this.quantity * this.price;
  }
}

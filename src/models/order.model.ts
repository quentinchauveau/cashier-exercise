import { Product } from './product.model';

export enum OrderStatus {
  running = 0,
  paid = 1,
}

export class Order {
  id: number = Date.now() + Math.floor(Math.random() * 10000);
  products: Product[] = [];
  status: OrderStatus = OrderStatus.running;
  id_table: number;
  total_price = 0.0;
  date_start: number = Date.now();
  date_end: number;

  constructor(id_table: number = null) {
    this.id_table = id_table;
  }

  public addProduct(product: Product, quantity: number) {
    // find the product
    const index = this.products.findIndex((el) => {
      return el.id == product.id;
    });
    if (index >= 0) {
      // if the product is in the list, only increment the quantity
      this.products.at(index).quantity += quantity;
      // if no quantity anymore, remove the product from the list
      if (this.products.at(index).quantity <= 0) {
        this.products.splice(index, 1);
      }
    } else {
      // otherwise, add the product to the list
      this.products.push(product);
    }
    this.refresh();
  }

  public refresh() {
    // refresh the total price of each product
    // calculate the new price total
    let total = 0.0;
    this.products.forEach((el) => {
      el.refresh();
      total += el.total_price;
    });
    this.total_price = total;
  }

  public close() {
    this.status = OrderStatus.paid;
    this.date_end = Date.now();
  }

  public canClose(): boolean {
    return this.products && this.products.length > 0;
  }
}

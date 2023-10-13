import { Product } from './product.model';

export enum OrderStatus {
  running = 0,
  paid = 1,
}

export class Order {
  id: number = Date.now();
  products: Product[];
  status: OrderStatus = OrderStatus.running;
}

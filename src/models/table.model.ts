import { Order } from './order.model';
import { Product } from './product.model';

export enum TypeTable {
  square_2 = 'square_dining_table_2',
  square_4 = 'square_dining_table_4',
  round_4 = 'round_dining_table_4',
  rectangle = '',
}
export interface PositionSchemaInterface {
  posX: number;
  posY: number;
  nbBlockX: number;
  nbBlockY: number;
}
export class Table {
  id: number;
  type: TypeTable;
  maxSeat: number;
  nbUser = 0;
  position: PositionSchemaInterface;
  order: Order;

  constructor(
    id: number,
    type: TypeTable,
    maxSeat: number,
    x: number,
    y: number,
  ) {
    this.id = id;
    this.type = type;
    this.maxSeat = maxSeat;
    this.position = this.getPositionSchema(x, y);
  }

  public addProductOrder(product: Product, quantity: number) {
    if (this.order == null) this.order = new Order(this.id);
    // we clone the object to prevent any change of the product parameter pass by referencee
    const product_clone = Object.assign(new Product(), product);
    this.order?.addProduct(product_clone, quantity);
  }

  public close() {
    this.order = null;
  }

  private getPositionSchema(x: number, y: number): PositionSchemaInterface {
    return {
      posX: x,
      posY: y,
      nbBlockX: this.maxSeat / 2,
      nbBlockY: this.maxSeat / 2,
    };
  }
}

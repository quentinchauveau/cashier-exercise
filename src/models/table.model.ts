import { Order } from './order.model';
import { Product } from './product.model';

export enum TypeTable {
  square_2 = 'square_dining_table_2',
  square_4 = 'square_dining_table_4',
  rectangle_6 = 'rectangle_dining_table_6',
  rectangle_8 = 'rectangle_dining_table_8',
  round_4 = 'round_dining_table_4',
}
export interface PositionSchemaInterface {
  posX: number;
  posY: number;
}
export class Table {
  id: number;
  type: TypeTable;
  position: PositionSchemaInterface;
  order: Order;

  constructor(id: number, type: TypeTable, x: number, y: number) {
    this.id = id;
    this.type = type;
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
    };
  }
}

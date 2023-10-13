import { Order } from './order.model';

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

  public addOrder() {
    this.order = new Order();
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

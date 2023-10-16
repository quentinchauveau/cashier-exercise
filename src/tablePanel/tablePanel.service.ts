import { Injectable } from '@nestjs/common';
import { Table } from '../models/table.model';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';
import { Order } from '../models/order.model';

@Injectable()
export class TablePanelService {
  private _table: Table;
  private _id: number;
  constructor(private service: DataService) {}

  get table(): Table {
    if (this._table && this._id === this._table.id) return this._table;
    this._table = this.service.getTables().find((el) => el.id == this._id);
    return this._table;
  }

  getTable(id: number): Table {
    this._id = id;
    return this.table;
  }

  getProducts(id_category: number): Product[] {
    return this.service.getProducts(id_category);
  }

  addProductOrder(id_product: number, quantity: number) {
    this.table.addProductOrder(this.service.getProduct(id_product), quantity);
  }

  closeOrder() {
    if (!this.table.order?.canClose()) return;
    this.table.order.close();
    this.service.addOrder(Object.assign(new Order(), this.table.order));
    this.table.close();
  }

  clearOrder() {
    this.table.close();
  }
}

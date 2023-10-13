import { Injectable } from '@nestjs/common';
import { Table } from '../models/table.model';
import { PlanService } from '../plan/plan.service';

@Injectable()
export class TablePanelService {
  private _table: Table;
  private _id: number;
  constructor(private service: PlanService) {}

  get table(): Table {
    if (this._table && this._id === this._table.id) return this._table;
    this._table = this.service.getTables().find((el) => el.id == this._id);
    return this._table;
  }

  getTable(id: number): Table {
    this._id = id;
    return this.table;
  }

  addOrder() {
    this.table.addOrder();
  }
}

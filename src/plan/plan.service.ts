import { Injectable } from '@nestjs/common';
import { Table, TypeTable } from '../models/table.model';
import { PlanTables } from '../models/planTables.model';

@Injectable()
export class PlanService {
  private planTables: PlanTables;

  constructor() {
    const tables = this.loadTables();
    this.planTables = {
      id: 1,
      tables: tables,
    };
  }

  getPlan() {
    return this.planTables;
  }

  getTables(): Table[] {
    return this.planTables.tables;
  }

  private loadTables(): Table[] {
    const tables = [
      new Table(1, TypeTable.square_2, 2, 0, 0),
      new Table(2, TypeTable.square_4, 4, 0, 1),
      new Table(3, TypeTable.square_4, 4, 1, 0),
      new Table(4, TypeTable.round_4, 5, 1, 1),
    ];
    return tables;
  }
}

import { Injectable } from '@nestjs/common';
import { Table } from '../models/table.model';
import { DataService } from '../data.service';

@Injectable()
export class PlanService {
  constructor(private service: DataService) {}

  getPlan() {
    return this.service.getPlan;
  }

  getTables(): Table[] {
    return this.service.getTables();
  }
}

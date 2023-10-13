import { Injectable } from '@nestjs/common';
import { DataService } from '../data.service';
import { Order } from '../models/order.model';

@Injectable()
export class InvoicesService {
  constructor(private service: DataService) {}

  getOrders(): Order[] {
    return this.service.getOrders();
  }

  getOrder(id: number): Order {
    return this.service.getOrder(id);
  }
}

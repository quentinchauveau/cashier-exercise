import { Controller, Get, Param, Render } from '@nestjs/common';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private service: InvoicesService) {}

  @Get()
  @Render('invoices/invoices.hbs')
  root() {
    return { orders: this.service.getOrders() };
  }

  @Get('/:id')
  @Render('invoices/invoice.hbs')
  getInvoice(@Param() params: any) {
    return {
      order: this.service.getOrder(params.id),
    };
  }
}

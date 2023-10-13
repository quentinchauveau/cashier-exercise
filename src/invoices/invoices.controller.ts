import { Controller, Get, Render } from '@nestjs/common';

@Controller('invoices')
export class InvoicesController {
  @Get()
  @Render('invoices/invoices.hbs')
  root() {
    return { message: 'Hello world!' };
  }
}

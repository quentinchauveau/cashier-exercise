import { Controller, Get, Param, Post, Render, Req, Res } from '@nestjs/common';
import { TablePanelService } from './tablePanel.service';
import Handlebars from 'handlebars';

@Controller('tables')
export class TablePanelController {
  constructor(private service: TablePanelService) {}

  @Get()
  @Render('table-panel/table-panel.hbs')
  index(@Res() res) {
    // if a table has already been loaded, redirect to the concerned table page
    if (this.service.table) {
      return res.status(302).redirect(`tables/${this.service.table.id}`);
    }
    return {};
  }

  @Get('/:id')
  @Render('table-panel/table-panel.hbs')
  getTable(@Param() params: any) {
    this.service.getTable(params.id);
    return {
      table: this.service.getTable(params.id),
    };
  }

  @Post('/addProductOrder/:id')
  addProductOrder(@Param() params: any, @Req() req) {
    this.service.addProductOrder(params.id, req?.body?.params?.quantity);
    return 'ok';
  }

  @Get('/getProducts/:id')
  getProducts(@Param() params: any) {
    return Handlebars.partials.panelProducts({
      products: this.service.getProducts(params.id),
    });
  }

  @Get('/getOrder')
  getOrder() {
    return Handlebars.partials.panelOrder({
      order: this.service.table?.order,
      displayActions: true,
    });
  }

  @Post('/close')
  close(@Res() res) {
    this.service.closeOrder();
    return res.status(302).redirect(`${this.service.table.id}`);
  }
}

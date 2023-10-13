import { Controller, Get, Param, Post, Render, Res } from '@nestjs/common';
import { TablePanelService } from './tablePanel.service';

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
    return { table: this.service.getTable(params.id) };
  }

  @Post('/addOrder')
  addOrder() {
    this.service.addOrder();
    return 'ok';
  }
}

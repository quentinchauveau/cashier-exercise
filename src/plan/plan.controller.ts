import { Controller, Get, Render } from '@nestjs/common';
import { PlanService } from './plan.service';
import Handlebars from 'handlebars';

@Controller('plan')
export class PlanController {
  constructor(private service: PlanService) {
    Handlebars.registerHelper('getTableAtPosition', (x, y) => {
      const tables = this.service.getTables();
      return tables.find((e) => e.position.posX == x && e.position.posY == y);
    });
  }

  @Get()
  @Render('plan/plan.hbs')
  root() {
    return {
      tables: this.service.getTables(),
      rows: [1, 2, 3, 4],
      cols: [1, 2, 3, 4],
    };
  }
}

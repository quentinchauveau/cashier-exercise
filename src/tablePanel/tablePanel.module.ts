import { Module } from '@nestjs/common';
import { TablePanelController } from './tablePanel.controller';
import { TablePanelService } from './tablePanel.service';
import { PlanModule } from '../plan/plan.module';

@Module({
  controllers: [TablePanelController],
  providers: [TablePanelService],
  imports: [PlanModule],
})
export class TablePanelModule {}

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HandlebarMiddleware } from './middlewares/handlebar.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TablePanelModule } from './tablePanel/tablePanel.module';
import { InvoicesController } from './invoices/invoices.controller';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [TablePanelModule, PlanModule],
  controllers: [AppController, InvoicesController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HandlebarMiddleware).forRoutes('/');
    consumer.apply(HandlebarMiddleware).forRoutes('plan');
    consumer.apply(HandlebarMiddleware).forRoutes('invoices');
    consumer.apply(HandlebarMiddleware).forRoutes('tables');
    consumer.apply(HandlebarMiddleware).forRoutes('tables(/.*)');
  }
}

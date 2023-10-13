import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HandlebarMiddleware } from './middlewares/handlebar.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TablePanelModule } from './tablePanel/tablePanel.module';
import { InvoicesModule } from './invoices/invoices.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [TablePanelModule, PlanModule, InvoicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HandlebarMiddleware).forRoutes('/');
    consumer.apply(HandlebarMiddleware).forRoutes('plan');
    consumer.apply(HandlebarMiddleware).forRoutes('invoices');
    consumer.apply(HandlebarMiddleware).forRoutes('tables');
    consumer.apply(HandlebarMiddleware).forRoutes('tables(/.*)');
    consumer.apply(HandlebarMiddleware).forRoutes('invoices(/.*)');
  }
}

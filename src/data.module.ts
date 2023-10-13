import { Module } from '@nestjs/common';
import { DataService } from './data.service';

@Module({
  imports: [DataModule],
  providers: [DataService],
  exports: [DataService],
})
export class DataModule {}

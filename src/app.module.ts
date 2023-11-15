/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './controller/get-data/app.controller';
import { AppService } from './service/get-data/app.service';
import { GetDataController } from './controller/get-data/get-data.controller';
import { GetDataService } from './service/get-data/get-data.service';

@Module({
  imports: [],
  controllers: [AppController,GetDataController],
  providers: [AppService,GetDataService],
})
export class AppModule {}

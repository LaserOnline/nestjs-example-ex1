/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { GetDataController } from './controller/get-data.controller';
import { GetDataService } from './service/get-data.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './guard/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'qwdqw5d1q1fqeflpklfpeqfpqwd', // * ใช้ secret key 
      signOptions: { expiresIn: '1h' }, // * ตั้งค่าระยะเวลาหมดอายุ
    }),
  ],
  controllers: [AppController,GetDataController],
  providers: [AppService,GetDataService,JwtStrategy],
})
export class AppModule {}

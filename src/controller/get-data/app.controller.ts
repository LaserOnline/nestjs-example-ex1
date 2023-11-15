/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, } from '@nestjs/common';
import { AppService } from '../../service/get-data/app.service';
import { Login } from 'src/models/login.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): any {
    return this.appService.getHello();
  }
  
  @Post('receive-message')
  receiveMessage(@Body() loginData: Login): Login {
    // * ใช้ service เพื่อประมวลผลข้อมูล login
    return this.appService.myLogin(loginData);
  }

}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards, } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { Login } from 'src/models/login.interface';
import { Register } from 'src/models/register.interface';
// * npm i @nestjs/jwt
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guard/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private jwtService: JwtService) { }

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Post('login')
  async login(@Body() login: Login): Promise<any> {
    const user = this.appService.myLogin(login);
    if (user) {
      const payload = { username: login.username };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    }
  }

  @Post('register')
  registerMessage(@Body() register: Register): any {
    return this.appService.myRegister(register)
  }

  // * Bearer token
  @UseGuards(JwtGuard)
  @Get('/data')
  getData(): any {
    return this.appService.getData()
  }

}

/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { HelloNestJS } from 'src/models/hello-nestjs.interface';
import { Login } from 'src/models/login.interface';

@Injectable()
export class AppService {
  getHello(): HelloNestJS {
    return {
      text: "Hello NestJS"
    }
  }

  myLogin(loginData: Login): Login {
    // ตรวจสอบความถูกต้องของข้อมูล login
    if (!loginData.username) {
      throw new BadRequestException('Key "username" is required');
    }
    if (!loginData.password) {
      throw new BadRequestException('Key "password" is required');
    }
    // ประมวลผล login
    // ในที่นี้เราแค่คืนค่า loginData กลับไป, ในแอปจริงอาจมีการประมวลผลเพิ่มเติม
    return loginData;
  }
}

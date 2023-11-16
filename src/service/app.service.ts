/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { HelloNestJS } from 'src/models/hello-nestjs.interface';
import { Login } from 'src/models/login.interface';
import { Register } from 'src/models/register.interface';

@Injectable()
export class AppService {
  // * Array สำหรับเก็บข้อมูลผู้ใช้
  private readonly users: Register[] = [];

  getHello(): HelloNestJS {
    return {
      text: "Hello NestJS"
    }
  }

  getData(): any {
    return this.users
  }

  myLogin(login: Login): any {
    // * ตรวจสอบความถูกต้องของข้อมูล login

    const user = this.users.find(u => u.username === login.username);

    if (!login.username) {
      throw new BadRequestException('กรุณากรอง username');
    }
    if (!login.password) {
      throw new BadRequestException('กรุณากรอง password');
    }

    if (!user) {
      throw new BadRequestException('ไม่พบชื่อผู้ใช้งาน')
    }

    if (user.password !== login.password) {
      throw new BadRequestException('password ไม่ถูกต้อง')
    }
    return { message: "เข้าสู่ระบบสำเร็จ" }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  myRegister(register: Register): any {

    // * RegExp สำหรับตรวจสอบว่าเป็นภาษาอังกฤษและตัวเลขเท่านั้น
    const isAlphaNumeric = /^[A-Za-z0-9]+$/;

    // * RegExp สำหรับตัวอักษรพิมพ์ใหญ่ 
    const hasUpperCase = /[A-Z]/;
    // * RegExp สำหรับตัวอักษรพิมพ์เล็ก
    const hasLowerCase = /[a-z]/;

    if (!register.username) {
      throw new BadRequestException('กรุณาใส่ username')
    }
    if (!register.password) {
      throw new BadRequestException('กรุณาใส่ password')
    }
    if (!register.password_verify) {
      throw new BadRequestException('กรุณาใส่ password ยืนยัน')
    }

    if (!isAlphaNumeric.test(register.username)) {
      throw new BadRequestException('username ต้องประกอบด้วยตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น')
    }

    if (!isAlphaNumeric.test(register.password)) {
      throw new BadRequestException('password ต้องประกอบด้วยตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น');
    }

    if (register.username.length < 8) {
      throw new BadRequestException('username ของคุณจะต้องไม่ต่ำ กว่า 8 ตัวอักษร')
    }

    if (register.password.length < 8) {
      throw new BadRequestException('password ของคุณ ต้องไม่ต่ำ กว่า 8 ตัวอักษร')
    } else if (!hasUpperCase.test(register.password)) {
      throw new BadRequestException("password ต้องมีตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว")
    } else if (!hasLowerCase.test(register.password)) {
      throw new BadRequestException("password ต้องมีตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว")
    }

    if (register.password != register.password_verify) {
      return {
        message: "รหัสผ่านของคุณ ไม่ตรงกัน"
      }
    }

    if (this.users.some(u => u.username === register.username)) {
      throw new BadRequestException('username นี้ถูกใช้งานแล้ว')
    }

    this.users.push(register);
    return { message: "Register Success" }

  }

}

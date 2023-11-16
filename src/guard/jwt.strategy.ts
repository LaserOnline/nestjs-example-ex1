/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'qwdqw5d1q1fqeflpklfpeqfpqwd', // ต้องตรงกับ key ที่ใช้ใน JwtModule
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}

import { Injectable } from '@nestjs/common';
import { HelloResponse } from 'src/models/hello-world.interface';

@Injectable()
export class GetDataService {
  HelloWorld(): HelloResponse {
    return {
      message: 'Hello World',
    };
  }
}

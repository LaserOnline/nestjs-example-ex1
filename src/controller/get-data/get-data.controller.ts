import { Controller, Get } from '@nestjs/common';
import { GetDataService } from './../../service/get-data/get-data.service';

@Controller()
export class GetDataController {
  constructor(private readonly getDataService: GetDataService) {}

  @Get('/hello')
  helloworld(): any {
    return this.getDataService.HelloWorld();
  }
}

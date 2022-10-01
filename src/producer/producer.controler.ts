import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller('/producer')
export class ProducerController {
  constructor(private producerService: ProducerService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/produce')
  async produceMessage(@Body() body: any) {
    return this.producerService.produceMessage(body);
  }
}

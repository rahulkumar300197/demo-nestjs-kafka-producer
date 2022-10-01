import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controler';
import { ProducerService } from './producer.service';

@Module({
  imports: [],
  controllers: [ProducerController],
  providers: [ProducerService],
})
export class ProducerModule {}

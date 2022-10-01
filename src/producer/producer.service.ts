import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { KafkaClientService } from '../common/kafka-client/kafka.client.service';

@Injectable()
export class ProducerService {
  constructor(private readonly kafkaClientService: KafkaClientService) {}
  async produceMessage(body: any) {
    const messageId = uuid();
    return await this.kafkaClientService.emit(
      'com.demo.topic1',
      messageId,
      body,
    );
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProducerModule } from './producer/producer.module';
import { KafkaClientModule } from './common/kafka-client/kafka.client.module';

@Module({
  imports: [
    KafkaClientModule.forRoot(),
    ProducerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

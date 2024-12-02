import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopicsController } from './controllers/topics.controller';
import { TopicsService } from './services/topics.service';

@Module({
  imports: [],
  controllers: [AppController, TopicsController],
  providers: [AppService, TopicsService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopicsController } from './controllers/topics.controller';
import { CommentsController } from './controllers/comments.controller';
import { TopicsService } from './services/topics.service';
import { CommentsService } from './services/comments.service';

@Module({
  imports: [],
  controllers: [AppController, TopicsController, CommentsController],
  providers: [AppService, TopicsService, CommentsService],
})
export class AppModule {}

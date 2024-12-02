import { Body, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { TopicsService } from 'src/services/topics.service';
import { CreateTopicRequestDto, GetTopicDetailRequestParams } from './types';

@Controller('topics')
export class TopicsController {
  constructor(private topicsService: TopicsService) { }
  @Get()
  async getTopics() {
    return this.topicsService.getTopics()
  }

  @Get('/:topicId')
  async getTopicDetail(@Param() params: GetTopicDetailRequestParams) {
    const { topicId } = params || {}
    const response = await this.topicsService.getTopicDetail(topicId)

    if (!response) {
      throw new NotFoundException('Topic not found')
    }

    return response
  }

  @Post('')
  async createTopic(@Body() createTopicDto: CreateTopicRequestDto) {
    const topic = await this.topicsService.createTopic({ 
      username: createTopicDto.username,
      title: createTopicDto.title,
      content: createTopicDto.content
    })

    return topic
  }

  @Put('/:topicId')
  async editTopic(@Param() params: GetTopicDetailRequestParams) {
    const { topicId } = params || {}
    const response = await this.topicsService.getTopicDetail(topicId)

    if (!response) {
      throw new NotFoundException('Topic not found')
    }

    return response
  }

  @Put('/:topicId')
  async deleteTopic(@Param() params: GetTopicDetailRequestParams) {
    const { topicId } = params || {}
    const response = await this.topicsService.deleteTopic(topicId)

    if (!response) {
      throw new NotFoundException('Topic not found')
    }

    return response
  }
}

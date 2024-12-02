import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { TopicsService } from 'src/services/topics.service';
import { CreateTopicRequestDto, DeleteTopicRequestBody, EditTopicRequestBody, EditTopicRequestDto, GetTopicDetailRequestParams } from './types';

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
  async editTopic(@Param() params: GetTopicDetailRequestParams, @Body() body: EditTopicRequestBody) {
    const { topicId } = params || {}
    const editTopicDto = new EditTopicRequestDto({ 
      topicId,
      username: body.username,
      title: body.title,
      content: body.content
    })
    const response = await this.topicsService.editTopic(editTopicDto)

    if (!response) {
      throw new NotFoundException('Topic not found')
    }

    return response
  }

  @Delete('/:topicId')
  async deleteTopic(@Param() params: GetTopicDetailRequestParams, @Body() body: DeleteTopicRequestBody) {
    const { topicId } = params || {}
    const { username } = body
    const response = await this.topicsService.deleteTopic(username, topicId)

    if (!response) {
      throw new NotFoundException('Topic not found')
    }

    return response
  }
}

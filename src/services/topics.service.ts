import { Body, Injectable } from '@nestjs/common';
import _ from 'lodash'
import { CreateTopicRequestDto } from 'src/controllers/types';
import { Topic } from 'src/entities/topic';

@Injectable()
export class TopicsService {
  private topics = [
    new Topic({ username: "Joseph", title: 'Topic 1', content: 'Topic 1 content.' }),
    new Topic({ username: "Giorno", title: 'Topic 2', content: 'Topic 2 content.' })
  ]

  async getTopics(): Promise<Topic[]> {
    return this.topics
  }

  async getTopicDetail(topicId: string): Promise<Topic> {
    const topic = this.topics.find(topic => topic.id === topicId)

    return topic
  }

  async editTopic(topicId: string): Promise<Topic> {
    const topic = this.topics.find(topic => topic.id === topicId)

    return topic
  }

  async deleteTopic(topicId: string): Promise<Topic> {
    const topic = this.topics.find(topic => topic.id === topicId)

    return topic
  }

  async createTopic(createTopicDto: CreateTopicRequestDto): Promise<Topic> {
    const topic = new Topic({ username: createTopicDto.username, title: createTopicDto.title, content: createTopicDto.content })

    return topic
  }
}

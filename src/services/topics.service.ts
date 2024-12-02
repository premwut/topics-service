import { Body, ForbiddenException, Injectable } from '@nestjs/common';
import _ from 'lodash'
import { CreateTopicRequestDto, EditTopicRequestDto } from 'src/controllers/types';
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
    const topic = this.topics.find((topic, index) => topic.id === topicId)

    return topic
  }

  async editTopic(editTopicDto: EditTopicRequestDto): Promise<Topic> {
    const { topicId, username } = editTopicDto
    const topic = this.topics.find(topic => topic.id === topicId)
    if (!topic || username !== topic.username) {
      throw new ForbiddenException('Not authorized deleting this topic.')
    }

    const updateIndex = this.topics.findIndex(topic => topic.id === topicId)
    delete editTopicDto.username
    const updatedTopic = { ...topic, ...editTopicDto }
    this.topics[updateIndex] = updatedTopic

    return updatedTopic
  }

  async deleteTopic(username: string, topicId: string): Promise<Boolean> {
    const topic = this.topics.find(topic => topic.id === topicId)
    if (!topic || username !== topic.username) {
      throw new ForbiddenException('Not authorized deleting this topic.')
    }
    const filtered = this.topics.filter(topic => topic.id !== topicId)
    this.topics = [...filtered]

    return true
  }

  async createTopic(createTopicDto: CreateTopicRequestDto): Promise<Topic> {
    const topic = new Topic({ username: createTopicDto.username, title: createTopicDto.title, content: createTopicDto.content })
    this.topics.push(topic)

    return topic
  }
}

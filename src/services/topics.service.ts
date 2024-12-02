import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto, CreateTopicRequestDto, EditTopicRequestDto } from 'src/controllers/types';
import { Comment } from 'src/entities/comment';
import { Topic } from 'src/entities/topic';

@Injectable()
export class TopicsService {
  private topics = [
    new Topic({ username: "Joseph", title: 'Topic 1', content: 'Topic 1 content.' }),
    new Topic({ username: "Giorno", title: 'Topic 2', content: 'Topic 2 content.' })
  ]

  validateUser(topic: Topic, username) {
    if (!topic || username !== topic.username) {
      throw new ForbiddenException('Not authorized deleting this topic.')
    }
  }

  async getTopics(): Promise<Topic[]> {
    return this.topics
  }

  async getTopicDetail(topicId: string): Promise<Topic> {
    const topic = this.topics.find((topic, index) => topic.id === topicId)

    return topic
  }

  async editTopic(editTopicDto: EditTopicRequestDto): Promise<Topic> {
    const { topicId, username, title, content } = editTopicDto
    const topic = this.topics.find(topic => topic.id === topicId)
    this.validateUser(topic, username)

    const updateIndex = this.topics.findIndex(topic => topic.id === topicId)
    const updatedTopic = { ...topic, title: title || topic.title, content: content || topic.content }
    this.topics[updateIndex] = updatedTopic

    return updatedTopic
  }

  async deleteTopic(username: string, topicId: string): Promise<Boolean> {
    const topic = this.topics.find(topic => topic.id === topicId)
    this.validateUser(topic, username)
    const filtered = this.topics.filter(topic => topic.id !== topicId)
    this.topics = [...filtered]

    return true
  }

  async createTopic(createTopicDto: CreateTopicRequestDto): Promise<Topic> {
    const topic = new Topic({ username: createTopicDto.username, title: createTopicDto.title, content: createTopicDto.content })
    this.topics.push(topic)

    return topic
  }

  async createComment(createCommentDto: CreateCommentDto) {
    const { topicId, username, content } = createCommentDto
    const topic = this.topics.find(topic => topic.id === topicId)

    if (!topic) {
      throw new NotFoundException('Topic not found')
    }

    const topicIndex = this.topics.findIndex(topic => topic.id === topicId)

    const createdComment = new Comment({ username, content, createdAt: new Date() })
    topic.comments.push(createdComment)

    return createdComment
    
  }
}

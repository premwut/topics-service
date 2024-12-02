import { IsOptional, IsString } from "class-validator"

export interface GetTopicDetailRequestParams {
  topicId: string
}

export class DeleteTopicRequestBody {
  @IsString()
  username: string
}

export class EditTopicRequestBody {
  @IsString()
  username: string

  @IsString()
  @IsOptional()
  title?: string
  
  @IsString()
  @IsOptional()
  content?: string
}

export class EditTopicRequestDto {
  @IsString()
  topicId: string

  @IsString()
  username: string

  @IsString()
  @IsOptional()
  title?: string
  
  @IsString()
  @IsOptional()
  content?: string

  constructor({ topicId, username, title, content }) {
    this.topicId = topicId
    this.username = username
    this.title = title
    this.content = content
  }
}

export class CreateTopicRequestDto {
  @IsString()
  username: string

  @IsString()
  title: string

  @IsString()
  content: string
}

export interface CreateCommentParams {
  topicId: string
}

export class CreateCommentRequestBody {
  @IsString()
  username: string

  @IsString()
  content: string
}

export class CreateCommentDto {
  @IsString()
  topicId: string

  @IsString()
  username: string

  @IsString()
  content: string

  constructor({ topicId, username, content }) {
    this.topicId = topicId
    this.username = username
    this.content = content
  }
}
import { IsString } from "class-validator"

export interface GetTopicDetailRequestParams {
  topicId: string
}

export class CreateTopicRequestDto {
  @IsString()
  username: string

  @IsString()
  title: string

  @IsString()
  content: string
}
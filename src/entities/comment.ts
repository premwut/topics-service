import { uuid } from 'uuidv4'

export class Comment {
    public id: string
    public username: string
    public content: string
    public createdAt: Date

    constructor({ username, content, createdAt }) {
        this.id = uuid()
        this.username = username
        this.content = content
        this.createdAt = createdAt
    }
}
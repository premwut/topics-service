import { uuid } from 'uuidv4'
import { Comment } from './comment'

export class Topic {
    public id: string
    public username: string
    public title: string
    public content: string
    public comments: Comment[]

    constructor({ username, title, content, comments = [] }) {
        this.id = uuid()
        this.username = username
        this.title = title
        this.content = content
        this.comments = comments
    }
}
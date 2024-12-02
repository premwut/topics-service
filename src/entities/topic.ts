import { uuid } from 'uuidv4'

export class Topic {
    public id: string
    public username: string
    public title: string
    public content: string

    constructor({ username, title, content }) {
        this.id = uuid()
        this.username = username
        this.title = title
        this.content = content
    }
}
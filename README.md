This web project is a part of DataWow assignment.

## Preface
First of all, thanks for the opportunity to let me take the assignment. I'd be very happy to have a feedback.

I will be as transparent as possible.
- I approach this by designing the service first which didn't take much time, but I lost quite huge amount of time setting up the styles in the web.
- This service consumed around 1.30 hrs and the web took around 2 hrs so I used up around 3.5 hrs doing this assignment
- Unit test is not implemented
- Web is finished only fetching and create new post. Post detail page and comment section is left undone.

### Application architecture 
- Controllers - handle incoming request and orchestrate DTO to communicate with server layer
- Services - concerns use case
- Entities - classes that directly related to the business logic
#### Persisting data
This service only persist data in volatile memory, if service restarts all data will be reset as well.
#### Authentication
This application has no authentication in server side, only receives username and store in client's session storage for identification

## Dependencies
- `class-validator` + `class-transformer` - used for request body validation

## How to test

- start server by `npm run start:dev`
- Run a web application that is built for this service
  - Link to web application: [https://github.com/premwut/topics-web](https://github.com/premwut/topics-web)
- Alternatively, you can test this service by using Postman to fire request
  - `GET /topics` - list all topics
  - `GET /topics/:topicId` - get specified topic
  - `POST /topics` - create new topic
  - `PUT /topics/:topicId` - edit specified topic
  - `DELETE /topics/:topicsId` - delete specified topic
  - `POST /topics/:topicId/comments` - create new comment on a topic
  - **Unfinished** `PUT /comments/:commentId` - edit specified comment
  - **Unfinished** `DELETE /comments/:commentId` - delete specified comment
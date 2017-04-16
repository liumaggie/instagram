# API Endpoints

## HTML API
### Root
* `GET /` - loads React web app

## JSON API
### Users
* `GET /api/users`
* `POST /api/users/`
  * add user by username
* `PATCH /api/users/:id`
* `EDIT /api/users/:id/edit`
* `GET /api/users/:id/images`
  * index of all images for a user
* `POST /api/users/:id/images`
  * create an image for a user
* `GET /api/users/:id/follows`
  * index of all follows for a user
* `POST /api/users/:id/follows`
  * create a follow for a user

### Session
* `POST /api/session`
* `DELETE /api/session`

### Images
* `GET /api/images`
* `GET /api/images/:id`
* `EDIT /api/images/:id/edit`
* `PATCH /api/images/:id`
* `DELETE /api/images/:id`
* `GET /api/images/:id/likes`
  * index of all likes for an image
* `POST /api/images/:id/likes`
  * create a like for an image
* `GET /api/images/:id/comments`
  * index of all comments for an image
* `POST /api/images/:id/comments`
  * create a comment for an image

### Likes
* `DELETE /api/likes/:id`

### Comments
* `DELETE /api/comments/:id`

### Follows
* `DELETE /api/follows/:id`

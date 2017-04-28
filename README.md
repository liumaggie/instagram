# Instapups

[Instapups live](https://www.instapups.herokuapp.com)

Instapups is a web application inspired by Instagram for people to post photos of their puppies and check out friends and other people's photos. It is built with
Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux framework on the frontend.

## Features & Implementation

### Image Feed
Images are stored in one table in the database, with columns for `id`, `user_id` that references the person who uploaded the image, `image` which is an attached file uploaded to AWS (Amazon Web Services) and `created_at`. There are optional columns of `caption` and `location`. Once logged in, an API call is made to the database that joins the image table and the user table on `user_id` to fetch the images that the current user is following. These images are stored until the current user is logged out.

Images on the home page are rendered in the `ImageIndexInfinite` component which show all the images received from the first API call when logged in. Each image's details is rendered by the subcomponent, `ImageIndexItem`. The UI of the `ImageIndexInfinite` component is designed based on Instagram's UI for a simple, clean interface. These images load by infinite scroll, where an API call is made for additional images to load on the bottom of the page when reached.  

### Users
Users are also stored in the database through a `users` table. They can edit their profile by uploading a profile picture, which is stored as `prof_image` or editing their `biography` and `website`. There are also images stored for the user profile that you visit which is also fetched by an API call for that specific user to the database, similarly to the home page image feed. Images can be uploaded through a form modal and deleted when on your user profile page.

The user profile page is rendered by the `UserProfile` component which renders subcomponents of `UserProfileDetail` and `UserImages`.

There is also a `Search` component render to search for existing users.

### Likes

Likes are stored in the database through an associated join `likes` table which contains the columns, `liker_id` and `image_id`. This is used to reference the person who liked the image and the image that is being liked.

Likes are rendered on the frontend in the store for images since creating and destroyed likes affect images. There is a `Like` component that is rendered based on the images fetched.

### Comments

Comments are also stored through an associated joined `comments` table which contains the columns, `author_id` and `image_id`. This is used to reference the person who commented on the image and the image that is being commented on.

Like `likes`, comments are rendered on the frontend in the `ImagesStore` since creating and destroyed comments affect images. There is a `Comment` component that is rendered based on the images fetched.

### Follows

Follows, similar to comments and likes, are also stored through an associated joined `follows` table which contains the columns, `follower_id` and `followee_id`. This is used to reference the follower and the followee.

Follows are rendered on the frontend in the store for users since creating and destroyed follows affect users. There is a `FollowButton` component that is rendered based on whether or not the current user is following the respective user.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue working on this project. The next steps for Instapups are outlined below.

### Hashtags
Hashtags are an important part of Instagram since users usually search and post with hashtags to find photos. I plan to implement this in a similar fashion as likes, comments and follows through association joins tables. I can use `pg-search` after creating hashtags so users can search through hash tags as well.

### Notifications
Notifications is another important feature for Instagram. It would be implemented like how I would implement hashtags.

### Direct Messaging
Messaging between users is an interesting feature that would be fun to implement since users can directly interact with other users. I would use WebRTC for notifications to appear for the users.

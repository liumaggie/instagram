# Instapups

[Instapups live](https://www.instapups.herokuapp.com)

Instapups is a web application inspired by Instagram for people to post photos of their puppies and check out photos of friends and other users.

## Overall Structure

The app was built with Ruby on Rails on the backend with a PostgreSQL database. Data was prefetched from the backend through AJAX requests to minimize N+1 queries. RESTful routes were used to generate JSON responses, with JBuilder curating necessary data.

On the frontend, React.js with a Redux framework was used for quick re-rendering of any updates and changes to the application state through the use of a virtual DOM. The library, `react-router`, was used to keep the URL in sync with what is displayed and `react-modal` was used to generate any modals, such as for uploading images or displaying the follower/following list.

## Features & Implementation

### User Authentication

Users can sign up and log in with validations in Rails' models to ensure that only valid data is saved to the database. `BCrypt` is used to hash passwords and verify credentials.

![SignupPage](https://github.com/liumaggie/instagram/blob/master/app/assets/images/auth-form.png)

### Image Feed
Images are stored in a table in the database, with columns for `id`, `user_id` that references the person who uploaded the image, `image` which is an attached file uploaded to AWS (Amazon Web Services) and `created_at`. There are optional columns of `caption` and `location`. Once logged in, an AJAX call is made to the database that joins the image table and the user table on `user_id` to fetch the images that the current user is following. These images are stored until the current user goes to a user's profile page or is logged out.

Images on the home page are rendered in the `ImageIndex` component which shows all the images received from the AJAX call. Each image's details (owner's profile picture, username, image, likes and comments) are rendered by the subcomponent, `ImageIndexItem`. The UI of the `ImageIndex` component is designed based on Instagram's UI for a simple, clean interface.

![ImageIndexItem](https://github.com/liumaggie/instagram/blob/master/app/assets/images/image_index_item.png)

These images load by infinite scroll, where an AJAX call is made for additional images to render when the bottom of the page is reached. The images are then prefetched using the data passed into `params` from the AJAX call as shown below:

```
followees = User.find(params[:userId].to_i).followees
followees.map { |followee| followee.id }
@images = Image
            .where(user_id: followees)
            .includes(:owner, comments: :author, likes: :liker)
            .order('created_at DESC')
            .limit(params[:limit].to_i)
            .offset(params[:offset].to_i)
```

### Users
Users are also stored in the database through a `users` table. They can edit their profile by uploading a profile picture, which is stored as `prof_image` or editing their `biography` and `website`. At a user profile page, an AJAX call to the database fetches that specific user's uploaded images. Images can be uploaded through a form modal and deleted on your own profile page.

![UserProfile](https://github.com/liumaggie/instagram/blob/master/app/assets/images/current-user-profile-page.png)

The user profile page is rendered by the `UserProfile` component with subcomponents of `UserProfileDetail`, displaying the number of posts, followers and following and `UserImages`, displaying images uploaded by the user and a modal when an image is clicked.

![UserImage](https://github.com/liumaggie/instagram/blob/master/app/assets/images/image-modal.png)

A `Search` component on the `NavBar` allows search for existing users. As the user types in the search bar, a list of users matching the input are fetched from the database through an AJAX call.

### Likes and Comments

Likes are stored in the database through an associated join `likes` table which contains the columns, `liker_id` and `image_id`. This is used to reference the person who liked the image and the image that is being liked.

Comments are also stored through an associated joined `comments` table which contains the columns, `author_id` and `image_id`. These are used to reference the person who commented on the image and the image that is being commented on, respectively.

Likes and comments are rendered on the frontend based on the `images` slice of state since creating and destroying likes and comments alters the image's. There is a `Like` and `Comment` component rendered for each image stored.

![LikeComments](https://github.com/liumaggie/instagram/blob/master/app/assets/images/like-comments.png)

### Follows

Follows, similar to comments and likes, are also stored through an associated joined `follows` table which contains the columns, `follower_id` and `followee_id`. This is used to reference the follower and the followee.

There is a `session` slice of state storing the current user as well as a `user` slice of state storing the user we are looking at, from either on the user's profile page or on the list of follows. A `FollowButton` component is rendered based on whether or not the current user is following the respective user.

![Followers](https://github.com/liumaggie/instagram/blob/master/app/assets/images/followers-list.png)


## Future Directions for the Project

In addition to the features already implemented, I plan to continue working on this project. The next steps for Instapups are outlined below.

### Hashtags
Hashtags are an important part of Instagram since users usually search and post with hashtags to find photos. I plan to implement this in a similar fashion as likes, comments and follows through association joins tables. I can use `pg-search` after creating hashtags so users can search through hashtags as well.

### Notifications
Notifications is another important feature for Instagram. It would be beneficial for users to be notified after anither user  It would be implemented like how I would implement hashtags.

### Direct Messaging
Messaging between users is an interesting feature that would be fun to implement since users can directly interact with other users. I would use WebRTC for notifications to appear for the users.

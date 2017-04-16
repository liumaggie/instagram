## Sample State

~~~~
{
  session: {
    currentUser: {
      id: 1,
      username: "ilovefood",
      prof_pic_path: "/profile_pic.jpg",
      description: "hello!"
      followers: {
        1: {
          id: 3,
          follower_id: 4
        }
      }
      followings: {
        1: {
          id: 2,
          followee_id: 3
        }
      }
    },
    errors: []
  },
  images: {
    1: {
      img_path: "images/testing.jpg",
      caption: "testing",
      location: "New York"
      user_id: 1
      likes: {
        1: {
          id: 1
          liker_id: 2
        }
      }
      comments: {
        1: {
          id: 1
          body: "i love food"
          author_id: 3
        }
      }
    }
    2: ...
  },
  image: {
    1: {
      img_path: "images/testing.jpg",
      caption: "testing",
      location: "New York"
      user_id: 1
      likes: {
        1: {
          id: 1
          liker_id: 2
        }
      }
      comments: {
        1: {
          id: 1
          body: "i love food"
          author_id: 3
        }
      }
    }
  }
  user: {
    1: {
      id: 1,
      username: "ilovefood",
      prof_pic_path: "/profile_pic.jpg"
      description: "hello!",
      followers: {
        1: {
          id: 3,
          follower_id: 4
        }
      }
      followings: {
        1: {
          id: 2,
          followee_id: 3
        }
      }
    }
  }
}
~~~~

import React from 'react';
import ImageItemDetail from '../shared/image_item_detail';

class ImageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.fetchFollowingImages = this.fetchFollowingImages.bind(this);
    this.state = { loading: true };
  }

  fetchFollowingImages(id) {
    this.props.fetchAllImagesFromUserForFeed(id);
  }

  componentWillMount() {
    const that = this;
    this.props.currentUser.followings.forEach((following) => {
      that.fetchFollowingImages(following.id);
    });
    setTimeout(() => {
      this.setState({ loading: false }), 200000
    });
    // this.props.fetchAllImages()
    //           .then(() => this.setState({ loading: false }));
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      this.props.router.push('/sign-up');
    }
  }

  render() {
    if (this.state.loading) {
      return <div className='loader'></div>;
    } else {
      return(
        <main className='home-photo-feed'>
          <article className='feed-image'>
            {
              this.props.images.map((image) =>
              <ImageItemDetail
                key={image.img_path}
                image={image}
                imageFor='index'
                />)
              }
            </article>
          </main>
        );
    }
  }
}

export default ImageIndex;

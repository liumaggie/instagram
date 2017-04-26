import React from 'react';
import ImageItemDetail from '../shared/image_item_detail';

class ImageIndexInfinite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, allImagesLoaded: false };
    this.fetchFollowingImages = this.fetchFollowingImages.bind(this);
    this.addImages = this.addImages.bind(this);
    this.loadMoreImages = this.loadMoreImages.bind(this);
    this.renderImages = this.renderImages.bind(this);
  }

  fetchFollowingImages(id) {
    this.props.fetchAllImagesFromUserForFeed(id);
  }

  componentWillMount() {
    this.props.fetchAllImages().then(() => this.setState({ loading: false }));
              // .then(() => this.setState({ loading: false, imagesLoaded: this.addImages(0, 7) }));
    // const that = this;
    // this.props.currentUser.followings.forEach((following) => {
    //   that.fetchFollowingImages(following.id);
    // });
    // this.addImages(0, 7);
  }

  addImages(start, end) {
    let images = [];
    for (let i = start; i < end; i++) {
      images.push(this.props.images[i]);
    }
    return images;
  }

  loadMoreImages() {
    const totalImages = this.state.imagesLoaded.length;
    const newImages = this.addImages(totalImages, totalImages + 7);
    this.setState({ loading: true, imagesLoaded: this.state.imagesLoaded.concat(newImages) });
    setTimeout(() => {
      this.setState({ loading: false });
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchAllImages();
  // }
  renderImages(start, end) {
    if (!this.state.loading) {
      let imgs = this.props.images;
      for (let i = start; i < end; i++) {
        return(
          <ImageItemDetail
            key={imgs[i].img_path}
            image={imgs[i]}
            imageFor='index' />
        );
      }
    }
  }

  render() {
    let loading;
    if (this.state.loading) {
      loading = <div className='loader'></div>;
    } else {
      loading = <button onClick={this.loadMoreImages}>Load More</button>;
    }
    return(
      <main className='home-photo-feed'>
        <article className='feed-image'>
          {
            let imgs = this.props.images;
            for (let i = start; i < end; i++) {
              return(
                <ImageItemDetail
                  key={imgs[i].img_path}
                  image={imgs[i]}
                  imageFor='index' />
              );
            }
          }
        </article>

        { loading }
      </main>
    );
  }
}

export default ImageIndexInfinite;

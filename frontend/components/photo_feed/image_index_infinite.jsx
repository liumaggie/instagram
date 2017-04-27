import React from 'react';
import ImageItemDetail from '../shared/image_item_detail';

class ImageIndexInfinite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, imagesLoaded: [], allLoaded: false, count: 0 };
    this.fetchFollowingImages = this.fetchFollowingImages.bind(this);
    this.addImages = this.addImages.bind(this);
    this.loadMoreImages = this.loadMoreImages.bind(this);
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
      this.setState({ loading: false, imagesLoaded: this.addImages(0, 7)});
    });
  }

  addImages(start, end) {
    let images = [];
    for (let i = start; i < end; i++) {
      images.push(this.props.images[i]);
    }
    return images
  }

  loadMoreImages() {
    const totalImages = this.state.imagesLoaded.length;
    const newImages = this.addImages(totalImages, totalImages + 7)
    if ((totalImages + 7) < this.props.images.length) {
      this.setState({ loading: true, imagesLoaded: this.state.imagesLoaded.concat(newImages), count: totalImages + newImages });
    } else {
      this.setState({ loading: true, imagesLoaded: this.props.images, allLoaded: true, count: this.props.images.length });
    }
    setTimeout(() => {
      this.setState({ loading: false });
    });
  }


  render() {
    let loading;
    if (this.state.loading) {
      loading = <div className='loader'></div>;
    } else if (this.state.allLoaded) {
      loading = '';
    } else {
      loading = <button onClick={this.loadMoreImages}>Load More</button>;
    }

      return(
        <main className='home-photo-feed'>
          <article className='feed-image'>
            {
              this.state.imagesLoaded.map((img, idx) =>
              <ImageItemDetail
                key={this.props.images[idx].img_path}
                image={this.props.images[idx]}
                imageFor='index' />
            )
          }
        </article>

        { loading }
      </main>
    );
}
}

export default ImageIndexInfinite;

import React from 'react';
import ImageItemDetail from '../shared/image_item_detail';

class ImageIndexInfinite extends React.Component {
  constructor(props) {
    super(props);

    this.state = { limit: 10, offset: 0, loading: true };
    this.loadMoreImages = this.loadMoreImages.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.loadMoreImages();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  loadMoreImages() {
    this.props.fetchNumOfImages(
      this.props.currentUser.id,
      this.state.limit,
      this.state.offset)
      .then(() => this.setState({ loading: false,
                                  offset: this.state.offset + 10 }));
  }

  // Credit: http://blog.sodhanalibrary.com/2016/08/detect-when-user-scrolls-to-bottom-of.html#.WQFzlxLyszV
  handleScroll() {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(body.scrollHeight,
                            body.offsetHeight,
                            html.clientHeight,
                            html.scrollHeight,
                            html.offsetHeight);
    const windowBottom = window.innerHeight + window.pageYOffset;
    if (windowBottom >= height) {
      this.loadMoreImages();
    } else {
      this.setState({ loading: false });
    }
  }

  render() {
    let loading = this.state.loading ? <div className='loader'></div> : '';

    return(
      <main className='home-photo-feed'>
        <article className='feed-image'>
          {
            this.props.images.map((image) =>
            <ImageItemDetail
              key={image.img_path}
              image={image}
              imageFor='index' />
          )
        }
        { loading }
      </article>

      </main>
    );
}
}

export default ImageIndexInfinite;

import React from 'react';
import ImageItemDetail from '../shared/image_item_detail';

class ImageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 7,
      offset: 0,
      loading: true,
      more: true,
      previousImages: null
    };
    this.loadMoreImages = this.loadMoreImages.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.checkIfMoreImages = this.checkIfMoreImages.bind(this);
  }

  componentWillMount() {
    this.loadMoreImages();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    this.props.removeAllImages();
  }

  checkIfMoreImages() {
    if (this.props.images.length <
      this.state.previousImages + this.state.limit) {
      this.setState({ loading: false, more: false });
    } else {
      this.setState({ offset: this.state.offset + this.state.limit,
                      more: true,
                      previousImages: this.props.images.length});
    }
  }

  loadMoreImages() {
    this.checkIfMoreImages();
    if (this.state.more) {
      this.setState({ loading: true }, () => {
        this.props.fetchNumOfImages(
          this.props.currentUser.id,
          this.state.limit,
          this.state.offset
        ).then(() => this.setState({ loading: false }));
      });
    }
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
    let loading =
      this.state.loading ? <div className='loader'></div> : '';

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

export default ImageIndex;

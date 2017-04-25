import React from 'react';
import ImageIndexItem from './image_index_item';

class ImageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true }
  }

  componentWillMount() {
    this.props.fetchAllImages()
              .then(() => this.setState({ loading: false }));
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      this.props.router.push('/log-in');
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
              <ImageIndexItem
                key={image.img_path}
                image={image}
                hidden={false}
                />)
              }
            </article>
          </main>
        );
    }
  }
}

export default ImageIndex;

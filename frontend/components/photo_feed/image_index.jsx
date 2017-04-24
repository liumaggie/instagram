import React from 'react';
import ImageIndexItem from './image_index_item';

class ImageIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllImages();
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      this.props.router.push('/log-in');
    }
  }

  render() {
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

export default ImageIndex;

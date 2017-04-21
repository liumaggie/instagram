import React from 'react';
import ImageIndexItem from './image_index_item';

class ImageIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllImages();
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
              currentUser={this.props.currentUser}/>)
            }
          </article>
        </main>
    );
  }
}

export default ImageIndex;

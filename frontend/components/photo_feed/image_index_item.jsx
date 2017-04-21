import React from 'react';
import ImageHeaderDetail from './image_header_detail';

class ImageIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul className='image-item'>

          <li><ImageHeaderDetail owner={ this.props.image.owner } time={this.props.image.time}/></li>
          <li><img src={ this.props.image.img_path } /></li>

          <ul>
            <li>Likes</li>
            <li>{ this.props.image.caption }</li>
            <li>Comments</li>

          </ul>
        </ul>
      </div>
    );
  }
}


export default ImageIndexItem;

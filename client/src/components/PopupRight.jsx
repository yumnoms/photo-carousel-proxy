import React from 'react';
import style from './PopupRight.css'

class PopupRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imageIndex: 5
    };

  }
  componentDidMount() {

    this.setState({ images: this.props.images, imageIndex: this.props.id });
  }

  render() {

    const ImageSlides = this.state.images.map((image, index) =>
      <div className = {style.imgDiv}>
        <img onClick = {()=>{this.props.cb(index)}} className = {style.img} src={image.imageUrl} />
      </div>

    );

    return (
      <div id = "right">
        {ImageSlides}
      </div>


    );
  }
}

export default PopupRight;
import React, { useImperativeHandle } from 'react';
import MembersPage from '../views/MembersPage/MembersPage';

import TemporaryImage from '../../Content/images/Silverstone.jpg';

export default class Canvas extends React.Component {
  // 1. Create <canvas> element (created when an image is uploaded)
  hookandGetContext() {
    this.canvas = document.getElementById('canvas')
    this.context = this.canvas.getContext('2d');
    this.image = new Image();
    this.image.src = TemporaryImage;
    console.log(this.image);
  }

  drawManipulatedImage() {
    console.log('drawing image');
    this.context.drawImage(this.image, 0, 0);
  }

  componentDidMount() {
    this.hookandGetContext();
    this.drawManipulatedImage();
  }

  
  // 2. Get canvas elementByID 
  // 3. Get Canvas context
  // 4. Get uploaded image data
    // 4a. Pass image data from MembersPage as a reference 
    // 4b. Assign iamge data to a temporary variable
    // 4c. Display the image

    render() {
      console.log('creating canvas');
      return(
          <canvas ref="canvas" id = "canvas" height = "100%" width = "100%"/>
      )
    }
  }
  
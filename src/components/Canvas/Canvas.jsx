import React from 'react';

import TemporaryImage from '../../Content/images/Silverstone.jpg';

export default class Canvas extends React.Component {
  // 1. Create <canvas> element (created when an image is uploaded)
  generateImage() {
    this.image = new Image();
    // Pass image data from MembersPage
    this.image.src = TemporaryImage;
    this.image.onload = () => {
      this.drawManipulatedImage();
    }
  }
  
  drawManipulatedImage = () => {
    // Create canvas and context
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // Canvas dimensions
    canvas.width = 0.5 * this.image.naturalWidth; canvas.height = 0.5 * this.image.naturalHeight;
    
    // Draw the Image
    console.log('drawing image', this.context, this.image);
    context.drawImage(this.image, 0, 0, canvas.width, canvas.height);
  }
  
  componentDidMount() {
    this.generateImage();
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
          <canvas ref="canvas" id = "canvas"/>
      )
    }
  }
  
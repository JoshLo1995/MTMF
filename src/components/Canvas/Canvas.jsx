import React from 'react';

export default class Canvas extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  // 1. Create <canvas> element (created when an image is uploaded)
  generateImage() {
    this.image = new Image();
    // Pass image data from MembersPage
    this.image.src = this.state.uploadedImage;
    this.canvas = document.getElementById('canvas');
    console.log('before manipulation', this.image.src);
    this.image.onload = () => {
      this.drawUploadedImage();
      // Need to convert return from updateImageData from Uint8 array to base64 econded string
      this.image.src = this.updateImageData();
      console.log('after manipulation', this.image.src);
      this.drawManipulatedImage();
       
    }
  }

  drawManipulatedImage = () => {
    // this.canvas = document.getElementById('canvas');
    // this.context = canvas.getContext('2d');

    // Canvas dimensions
    this.canvas.width = this.image.naturalWidth; this.canvas.height = this.image.naturalHeight;

    this.context.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
  }
  
  drawUploadedImage = () => {
    // Create canvas and context
    this.context = this.canvas.getContext('2d');

    // Canvas dimensions
    this.canvas.width = this.image.naturalWidth; this.canvas.height = this.image.naturalHeight;
    
    // Draw the Image
    console.log('drawing image', this.image);
    this.context.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
  }

  updateImageData() {
    // Gets imagedata as Uint8
    let imageData = this.context.getImageData(0, 0, this.image.naturalWidth, this.image.naturalHeight);

    // Determine majority color and then filter that color out, but for now just do black
    // 
    imageData = this.blackPassFilter(imageData.data);
    
    // imageData = new ImageData(imageData.data, this.image.naturalWidth, this.image.naturalHeight);
    console.log('black pass filter applied', imageData);

    return imageData;
  }

  blackPassFilter(image) {
    for (let i = 0 ; i < image.length; i += 4) {
      let red = i;
      let blue = i + 1;
      let green = i + 2;
      let alphaVal = i + 3;
      if (
        image[red] !== 65 && // Red value
        image[blue] !== 65 && // Blue value
        image[green] !== 66 && // Green value
        image[alphaVal] >= 0.3 // Alpha value
        ) {
          image[red] = 0;
          image[blue] = 0;
          image[green] = 0;
          image[alphaVal] = 0;
          console.log('converted colored pixel to white');
        }
    }
    console.log(image);
    // Convert from Uint8 to base64
    const img = this.canvas.toDataURL('image/jpeg');
    return `<img src = '${img}'/>`;
  }
  
  componentDidMount() {
    this.setState(
      {
        uploadedImage: this.props.uploadedImage
      } , () => {
        this.generateImage();
      }
    )
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
  
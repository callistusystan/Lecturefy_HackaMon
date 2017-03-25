import React, { Component } from 'react';
import { Pager, Image } from 'react-bootstrap';

class SlideView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentImage: 0,
			images: ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg"]
		};
	}

	prevOnClick() {
		let { currentImage, images } = this.state;
		const maxSize = images.length;

		if (currentImage > 0) {
			this.setState({
				currentImage: currentImage-1
			});
		}
	}

	nextOnClick() {
		let { currentImage, images } = this.state;
		const maxSize = images.length;

		if (currentImage < images.length-1) {
			this.setState({
				currentImage: currentImage+1
			});
		}
	}

	render() {
		const { images, currentImage } = this.state;
		return (
			<div>
	    	<Image src={images[currentImage]} responsive />
				<Pager>
					<Pager.Item previous onClick={this.prevOnClick.bind(this)}>&larr; Previous Slide</Pager.Item>
					<Pager.Item next onClick={this.nextOnClick.bind(this)}>Next Slide &rarr;</Pager.Item>
				</Pager>
			</div>
	  );
	}
};

export default SlideView;

import React, { Component } from 'react';
import { Pager, Image } from 'react-bootstrap';

class SlideView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			curIndex: 0,
			images: ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg"]
		};
		this.props.socket.on('onPresenterSlideIndexChanged', (slide_information) => {
			this.onPresenterSlideIndexChanged(slide_information);
		});
		this.props.socket.emit('get_slide_index', null);
	}

	onSlideChanged(slide_index, isPresenter) {
		console.log(slide_index, isPresenter);
		this.props.socket.emit('onSlideIndexChanged', {slide_index: slide_index, is_presenter: isPresenter});
	}

	onPresenterSlideIndexChanged(partial_slide_information) {
		console.log(partial_slide_information);
			this.setState({
				curIndex: partial_slide_information.slide_index
			});
	}

	prevOnClick() {
		let { curIndex } = this.state;

		if (curIndex > 0) {
			this.setState({
				curIndex: curIndex-1
			});
			this.onSlideChanged(curIndex-1, this.props.isPresenter);
		}
	}

	nextOnClick() {
		let { curIndex, images } = this.state;
		const maxSize = images.length;

		if (curIndex < maxSize-1) {
			this.setState({
				curIndex: curIndex+1
			});
			this.onSlideChanged(curIndex+1, this.props.isPresenter);
		}

		// emit event to go previous slide
	}

	renderSlide() {
		const { images, curIndex } = this.state;
		return (
    	<Image src={images[curIndex]} responsive />
		);
	}

	renderNavButtons() {
		if (this.props.isPresenter) {
			return (
				<Pager>
					<Pager.Item previous onClick={this.prevOnClick.bind(this)}>&larr; Previous Slide</Pager.Item>
					<Pager.Item next onClick={this.nextOnClick.bind(this)}>Next Slide &rarr;</Pager.Item>
				</Pager>
			);
		}
	}

	render() {
		return (
			<div>
				{this.renderSlide()}
				{this.renderNavButtons()}
			</div>
	  );
	}
};

export default SlideView;

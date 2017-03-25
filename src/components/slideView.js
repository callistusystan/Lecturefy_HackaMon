import React from 'react';
import { Carousel } from 'react-bootstrap';

const images = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg"];

const renderCarouselImages = () => {
	return images.map((image) => {
		return (
			<Carousel.Item>
				<img alt="900x500" src={image} />
			</Carousel.Item>
		);
	});
};

export default (props) => {
	return (
    <Carousel>
			{renderCarouselImages()}
		</Carousel>
  );
};

import React from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import data from '../../../data';

const CarouselCards = () => {
	const isCarousel = React.useRef(null);
	const [index, setIndex] = React.useState(0);

	return (
		<View
			style={{
				// justifyContent: 'center',
				// alignItems: 'center',
				// flex: 1,
				marginTop: 50,
			}}>
			<Carousel
				layout='tinder'
				layoutCardOffset={9}
				ref={isCarousel}
				data={data}
				renderItem={CarouselCardItem}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				inactiveSlideShift={0}
				onSnapToItem={(index) => setIndex(index)}
				useScrollView={true}
			/>
			<Pagination
				dotsLength={data.length}
				activeDotIndex={index}
				carouselRef={isCarousel}
				dotStyle={{
					width: 15,
					height: 15,
					borderRadius: 5,
					marginHorizontal: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.95)',
				}}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
				tappableDots={true}
			/>
		</View>
	);
};

export default CarouselCards;

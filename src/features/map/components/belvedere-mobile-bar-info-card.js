import React from 'react';
import styled from 'styled-components/native';
import { Text, Image, View, StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

const BarCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const BarCardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[3]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
	flex-direction: row;
	align-items: center;
`;
const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
`;

export const BelvedereMobileBarInfoCard = ({ bars = {} }) => {
	const {
		name = 'Some Restaurant',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
		],
		address = '100 some random street',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = bars;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		//
		<BarCard elevation={5}>
			<BarCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Title>{name}</Title>
				<Section>
					<Rating>
						{ratingArray.map(() => (
							<SvgXml xml={star} width={20} height={20} />
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant='label' style={{ color: 'red' }}>
								CLOSED TEMPORARILY
							</Text>
						)}
						<View style={{ paddingLeft: 10 }} />
						{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
						<View style={{ paddingLeft: 10 }} />
						<Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
					</SectionEnd>
					<Address>{address}</Address>
				</Section>
			</Info>
		</BarCard>
	);
};

// const styles = StyleSheet.create({
// 	card: { backgroundColor: 'white' },
// 	cover: { padding: 20, backgroundColor: 'white' },
// 	title: { padding: 16 },
// });

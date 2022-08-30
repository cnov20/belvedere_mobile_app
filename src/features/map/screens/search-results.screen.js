import React, { useContext } from 'react';
import {
	StatusBar,
	FlatList,
	SafeArea,
	SafeAreaView,
	StyleSheet,
	View,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { Spacer } from '../../../components/spacer/spacer.component';

import { BelvedereMobileBarInfoCard } from '../components/belvedere-mobile-bar-info-card';
import { MobileBarsContext } from '../../../services/mobile-bars/mobile-bars.context';

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

// const BarListContainer = styled.View`
// 	// flex: 1;
// 	padding: ${(props) => props.theme.space[3]};
// `;

const SearchResultsScreen = () => {
	const mobileBarsContext = useContext(MobileBarsContext);
	console.log('MOBILE BARS CONTEXT————— ', mobileBarsContext);
	return (
		<>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantList
				data={mobileBarsContext.bars}
				renderItem={() => (
					<Spacer position='bottom' size='large'>
						<BelvedereMobileBarInfoCard />
					</Spacer>
				)}
				keyExtractor={(item) => item.name}
			/>
		</>
	);
};

export default SearchResultsScreen;

// const styles = StyleSheet.create({});

// <SafeArea>
// 	<SearchContainer>
// 		<Searchbar />
// 	</SearchContainer>
// 	<RestaurantList
// 		data={restaurantContext.restaurants}
// 		renderItem={() => (
// 			<Spacer position='bottom' size='large'>
// 				<RestaurantInfoCard />
// 			</Spacer>
// 		)}
// 		keyExtractor={(item) => item.name}
// 	/>
// </SafeArea>;

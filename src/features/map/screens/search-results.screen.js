import React, { useContext } from 'react';
import {
	StatusBar,
	FlatList,
	SafeArea,
	SafeAreaView,
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Constants from 'expo-constants';

import styled from 'styled-components/native';

import { Spacer } from '../../../components/spacer/spacer.component';

import { BelvedereMobileBarInfoCard } from '../../mobile-bars/components/belvedere-mobile-bar-info-card';
import { MobileBarsContext } from '../../../services/mobile-bars/mobile-bars.context';

import { Search } from '../../mobile-bars/components/search.component';

const SearchContainer = styled.View`
	// padding-top: 16px;
	top: ${Constants.statusBarHeight}px;
	padding: ${(props) => props.theme.space[3]};
	// position: absolute;
	z-index: 999;
	width: 100%;
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

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;
const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const SearchResultsScreen = ({ navigation }) => {
	const { isLoading, error, bars } = useContext(MobileBarsContext);
	// console.log('MOBILE BARS CONTEXT————— ', MobileBarsContext);
	return (
		<>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating={true} color={Colors.blue300} />
				</LoadingContainer>
			)}
			{/* <SearchContainer> */}
			<Search />
			{/* </SearchContainer> */}
			<RestaurantList
				data={bars}
				renderItem={({ item }) => {
					console.log(item);
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('MobileBarDetailsScreen', {
									bar: item,
								})
							}>
							<Spacer position='bottom' size='large'>
								<BelvedereMobileBarInfoCard bar={item} />
							</Spacer>
						</TouchableOpacity>
					);
				}}
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

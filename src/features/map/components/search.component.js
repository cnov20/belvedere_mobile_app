import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';

// import { LocationContext } from "../../../services/location/location.context";
import {
	GooglePlacesAutocomplete,
	GooglePlaceDetail,
	LatLng,
} from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../../../environments';

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
	position: absolute;
	z-index: 999;
	top: ${Constants.statusBarHeight};
	width: 100%;
`;

export const Search = () => {
	// const { keyword, search } = useContext(LocationContext);
	// const [searchKeyword, setSearchKeyword] = useState(keyword);
	// const onPlaceSelected = (
	// 	details = GooglePlaceDetail | null,
	// 	flag = 'origin' | 'destination'
	// ) => {
	// 	const set = flag === 'origin' ? setOrigin : setDestination;
	// 	const position = {
	// 		latitude: details?.geometry.location.lat || 0,
	// 		longitude: details?.geometry.location.lng || 0,
	// 	};
	// 	set(position);
	// 	moveTo(position);
	// };
	// const InputAutoComplete = (label, placeholder, onPlaceSelected) => {
	// 	return (
	// 		<>
	// 			{/* <Text>{label}</Text> */}
	// 			<View>
	// 				<GooglePlacesAutocomplete
	// 					fetchDetails
	// 					onPress={(data, details = null) => {
	// 						// 'details' is provided when fetchDetails = true
	// 						console.log(data, details);
	// 						onPlaceSelected(details);
	// 					}}
	// 					query={{
	// 						key: GOOGLE_API_KEY,
	// 						language: 'en',
	// 					}}
	// 				/>
	// 			</View>
	// 		</>
	// 	);
	// };
	// return (
	// 	<SearchContainer>
	// 		<InputAutoComplete label onPlaceSelected></InputAutoComplete>
	// 	</SearchContainer>
	// );
};

{
	/* <Searchbar
	minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
	placeholder='Search for a location'
	icon='map'
	value={searchKeyword}
	onSubmitEditing={() => {
		// search(searchKeyword);
	}}
	onChangeText={(text) => {
		setSearchKeyword(text);
	}}
/>; */
}

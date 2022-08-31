import React from 'react';
import { Text } from 'react-native';

import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

import SearchResultsScreen from '../../features/map/screens/search-results.screen';
import { MobileBarDetailsScreen } from '../../features/mobile-bars/screens/mobile-bar-details.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator
			headerMode='none'
			screenOptions={{
				...TransitionPresets.ModalPresentationIOS,
			}}>
			<RestaurantStack.Screen
				name='SearchResultsScreen'
				component={SearchResultsScreen}
			/>
			<RestaurantStack.Screen
				name='MobileBarDetailsScreen'
				component={MobileBarDetailsScreen}
			/>
		</RestaurantStack.Navigator>
	);
};

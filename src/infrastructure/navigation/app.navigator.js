import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

import { SettingsNavigator } from './settings.navigator';
import DrawerNavigator from './drawer.navigator';

// // import { RestaurantsNavigator } from "./restaurants.navigator";
// // import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from '../../features/map/screens/map.screen';
import AccountHomeScreen from '../../features/account/screens/account-home.screen';

// // import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
// // import { LocationContextProvider } from '../../services/location/location.context';
// // import { FavouritesContextProvider } from '../../services/favourites/favourites.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings',
};

// const createScreenOptions = ({ route }) => {
// 	const iconName = TAB_ICON[route.name];
// 	return {
// 		tabBarIcon: ({ size, color }) => (
// 			<Ionicons name={iconName} size={size} color={color} />
// 		),
// 	};
// };

export const AppNavigator = () => (
	<Tab.Navigator
		// screenOptions={createScreenOptions}
		screenOptions={{
			headerShown: false,
			// header
		}}
		tabBarOptions={{
			activeTintColor: 'blue',
			inactiveTintColor: 'gray',
		}}>
		{/* <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />*/}
		<Tab.Screen name='Account Home' component={DrawerNavigator} />
		<Tab.Screen
			name='Map'
			component={MapScreen}
			options={{ headerShown: true }}
		/>
		<Tab.Screen name='Settings' component={SettingsNavigator} />
	</Tab.Navigator>
);

// export default AppNavigator;

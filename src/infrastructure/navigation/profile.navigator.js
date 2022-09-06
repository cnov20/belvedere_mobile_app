import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawerNavigator from './drawer.navigator';

import ProfileScreen from '../../features/account/screens/account-profile.screen';
import EditProfileScreen from '../../features/settings/screens/edit-profile.screen';
import ProfileEditScreen from '../../features/account/screens/account-edit-profile.screen';
import DrinkOrderScreen from '../../features/account/screens/drink-order.screen';
import LocationFinderScreen from '../../features/account/screens/location-finder';
import HowThisWorksScreen from '../../features/account/screens/how-this-works.screen';

import { LocationPickerMapScreen } from '../../features/map/screens/location-picker-map.screen';

import { useNavigation } from '@react-navigation/native';
import { MapScreen } from '../../features/map/screens/map.screen';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const navigation = useNavigation();

export const ProfileNavigator = ({ navigation }) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerTransparent: true,
			}}>
			{/* <Stack.Screen
				name='Drawer'
				component={Drawer}
				options={{ headerShown: false }}
			/> */}
			<Stack.Screen
				name='Profile Screen'
				component={ProfileScreen}
				// options={{
				// 	headerShown: false,
				// }}
				options={{ headerTitle: '' }}
				// options={({ navigation }) => ({
				// 	//receive navigation here
				// 	headerLeft: () => (
				// 		<TouchableOpacity
				// 			style={{ paddingLeft: 20 }}
				// 			onPress={() => navigation.openDrawer()}>
				// 			<Text>open</Text>
				// 		</TouchableOpacity>
				// 	),
				// })}
			/>
			<Stack.Screen
				name='Profile Edit'
				component={ProfileEditScreen}
				options={{
					// headerTitle: 'Edit Profile',
					// headerBackTitleVisible: false,
					// headerTitleAlign: 'center',
					// headerStyle: {
					// 	backgroundColor: '#fff',
					// 	shadowColor: '#fff',
					// 	elevation: 4,
					// },
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Drink Order Screen'
				component={DrinkOrderScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Map'
				component={MapScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='How This Works'
				component={HowThisWorksScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Location Picker Map'
				component={LocationPickerMapScreen}
				options={{ headerShown: false }}></Stack.Screen>
		</Stack.Navigator>
	);
};

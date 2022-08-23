import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../../features/account/screens/ProfileScreen';
import EditProfileScreen from '../../features/settings/screens/edit-profile.screen';
import ProfileEditScreen from '../../features/account/screens/account-edit-profile.screen';
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export const ProfileNavigator = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Profile Screen'
				component={ProfileScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Profile Edit'
				component={ProfileEditScreen}
				options={{
					headerTitle: 'Edit Profile',
					headerBackTitleVisible: false,
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#fff',
						shadowColor: '#fff',
						elevation: 0,
					},
				}}
			/>
		</Stack.Navigator>
	);
};

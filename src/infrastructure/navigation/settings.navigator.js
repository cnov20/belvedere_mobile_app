import React from 'react';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { CameraScreen } from '../../features/settings/screens/camera.screen';

import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';

// import EditProfileScreen from '../../features/settings/screens/edit-profile.screen';
import EditProfileScreen from '../../features/settings/screens/edit-profile.screen';
import AppNotifications from '../../features/settings/components/account.notifications.component';
import LocationNotifications from '../../features/settings/components/location.notifications.component';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ navigation }) => {
	return (
		<SettingsStack.Navigator
			// headerMode='screen'
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				headerShown: false,
			}}>
			<SettingsStack.Screen
				// screenOptions={{
				// 	headerShown: false,
				// }}
				name='Settings Tab'
				component={SettingsScreen}
			/>
			<SettingsStack.Screen name='Favourites' component={() => null} />
			<SettingsStack.Screen name='Camera' component={CameraScreen} />
			<SettingsStack.Screen name='Edit Profile' component={EditProfileScreen} />
			<SettingsStack.Screen
				name='App Notifications'
				component={AppNotifications}
			/>
			<SettingsStack.Screen
				name='Location Notifications Settings'
				component={LocationNotifications}
			/>
		</SettingsStack.Navigator>
	);
};

import React from 'react';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { CameraScreen } from '../../features/settings/screens/camera.screen';

import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';

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
				screenOptions={{
					headerShown: false,
				}}
				name='Settings Tab'
				component={SettingsScreen}
			/>
			<SettingsStack.Screen name='Favourites' component={() => null} />
			<SettingsStack.Screen name='Camera' component={CameraScreen} />
		</SettingsStack.Navigator>
	);
};

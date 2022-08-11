import React from 'react';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';

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
			}}>
			<SettingsStack.Screen
				options={{
					header: () => {
						return null;
					},
				}}
				name='Settings Tab'
				component={SettingsScreen}
			/>
			<SettingsStack.Screen name='Favourites' component={() => null} />
		</SettingsStack.Navigator>
	);
};

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AccountHomeScreen from '../../features/account/screens/account-home.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
	return (
		// <NavigationContainer>
		<Drawer.Navigator initialRouteName='Account Home'>
			<Drawer.Screen name='Account Home' component={AccountHomeScreen} />
			<Drawer.Screen name='Settings' component={SettingsScreen} />
		</Drawer.Navigator>
		// </NavigationContainer>
	);
}

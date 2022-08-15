import * as React from 'react';
import { Button, View, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import AccountHomeScreen from '../../features/account/screens/account-home.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { Icon } from 'react-native-elements';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {
	return (
		// <NavigationContainer>
		<Drawer.Navigator
			screenOptions={{
				drawerPosition: 'left',
				// headerLeftLabelVisible: false,
				// headerShown: false,
			}}>
			<Drawer.Screen
				name='Account Home'
				component={AccountHomeScreen}
				options={{
					// headerStyle: {
					// 	opacity: 1,
					// },
					headerLeft: false,
					headerRight: () => (
						<TouchableOpacity
							onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
							<Image
								source={require('../../../assets/drawer.png')}
								style={{
									width: 35,
									height: 35,
									marginRight: 10,
									tintColor: '#1F73BD',
								}}
							/>
							{/* <Icon name='menu' type='material' size={30} color='black' /> */}
						</TouchableOpacity>
					),
				}}
			/>
			<Drawer.Screen name='Settings' component={SettingsScreen} />
		</Drawer.Navigator>
		// </NavigationContainer>
	);
}

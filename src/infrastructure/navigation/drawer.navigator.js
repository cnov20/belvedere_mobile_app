import * as React from 'react';
import { Button, View, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import AccountHomeScreen from '../../features/account/screens/account-home.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { Icon } from 'react-native-elements';

import DrinkOrderScreen from '../../features/account/screens/drink-order.screen';
import LocationFinderScreen from '../../features/account/screens/location-finder';
import HowThisWorksScreen from '../../features/account/screens/how-this-works.screen';
import PrivacyPolicyScreen from '../../features/account/screens/privacy-policy.screen';
import TermsAndConditionsScreen from '../../features/account/screens/terms-and-conditions.screen';

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
			<Drawer.Screen name='Order A Drink' component={DrinkOrderScreen} />
			<Drawer.Screen name='Location Finder' component={LocationFinderScreen} />
			<Drawer.Screen name='How This Works' component={HowThisWorksScreen} />
			<Drawer.Screen name='Privacy Policy' component={PrivacyPolicyScreen} />
			<Drawer.Screen
				name='Terms & Conditions'
				component={TermsAndConditionsScreen}
			/>
		</Drawer.Navigator>
		// </NavigationContainer>
	);
}

import React from 'react';
// import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../../features/account/screens/account.screen';
import { LoginScreen } from '../../features/account/screens/login.screen';
import { RegisterScreen } from '../../features/account/screens/register.screen';
import { RegisterFinalScreen } from '../../features/account/screens/register-final.screen';
import { ResetPassword } from '../../features/account/screens/password-reset.screen';
// import SearchResultsScreen from '../../features/map/screens/search-results.screen';
import { RestaurantsNavigator } from './mobile-bars.navigator';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
	<Stack.Navigator
		headerMode='none'
		screenOptions={{
			headerShown: false,
		}}>
		<Stack.Screen name='Main' component={AccountScreen} />
		<Stack.Screen name='Login' component={LoginScreen} />
		<Stack.Screen name='Register' component={RegisterScreen} />
		<Stack.Screen name='Register Final' component={RegisterFinalScreen} />
		<Stack.Screen name='Reset Password' component={ResetPassword} />
	</Stack.Navigator>
);

import React, { useContext, useCallback, useState } from 'react';
import { Button, View, TouchableOpacity, Image } from 'react-native';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';
// import { Drawer } from 'react-native-paper';

import { SettingsScreen } from '../../settings/screens/settings.screen';

function AccountDrawerContent(props) {
	const { onLogout, user, auth } = useContext(AuthenticationContext);

	return (
		<DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
			{/*all of the drawer items*/}
			<DrawerItemList {...props} style={{ borderWidth: 1 }} />
			<View style={{ flex: 1, marginVertical: 20, borderWidth: 1 }}>
				{/* here's where you put your logout drawer item*/}
				<DrawerItem
					label='Settings'
					onPress={() => {
						props.navigation.navigate('Settings');
					}}
					style={{ justifyContent: 'flex-end' }}
				/>

				<DrawerItem
					label='Log out'
					onPress={() => {
						AsyncStorage.clear();
						onLogout();
					}}
					// style={{ flex: 1, justifyContent: 'flex-end' }}
				/>
			</View>
		</DrawerContentScrollView>
	);
}

export default AccountDrawerContent;

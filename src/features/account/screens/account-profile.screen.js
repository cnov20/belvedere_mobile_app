import React, { useState, useEffect, useContext, useCallback } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	SafeAreaView,
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import FormButton from '../../../components/UI/FormButton';
import {
	AccountBackground,
	AccountCardBackground,
	AccountCover,
	CardContainer,
	CardButton,
	AuthButton,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';

// import { AuthContext } from '../navigation/AuthProvider';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import AccountInfoCard from '../components/account-info-card.component';

// import firestore from '@react-native-firebase/firestore';
// import PostCard from '../components/PostCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = ({ navigation, route }) => {
	// const [user, logout] = useContext(AuthContext);
	const { onLogout, user, auth } = useContext(AuthenticationContext);

	const [photo, setPhoto] = useState(null);

	if (user || auth) {
		const currentUser = auth.currentUser;
		console.log(currentUser);
	}

	const currentUser = auth.currentUser;

	const getProfilePicture = async (currentUser) => {
		const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
		setPhoto(photoUri);
	};

	useFocusEffect(
		useCallback(() => {
			getProfilePicture(currentUser);
		}, [currentUser])
	);

	return (
		// <SafeAreaView>

		<AccountCardBackground>
			{/* <AccountCover> */}
			<CardContainer>
				<Card style={{ flex: 1 }}>
					<ScrollView
						style={styles.container}
						contentContainerStyle={{
							justifyContent: 'center',
							alignItems: 'center',
						}}
						showsVerticalScrollIndicator={false}>
						{photo ? (
							<>
								<Image style={styles.userImg} source={{ uri: photo }}></Image>
							</>
						) : (
							<>
								<Image
									style={styles.userImg}
									source={require('../../../../assets/user-8.jpg')}></Image>
							</>
						)}

						<Text style={styles.userName}>Jan(n)e(lle) Doe</Text>
						<Text style={styles.aboutUser}>New York, NY</Text>
						{/* <AccountInfoCard> */}
						<View style={styles.userBtnWrapper}>
							{route.params ? (
								<>
									<TouchableOpacity style={styles.userBtn} onPress={() => {}}>
										<Text style={styles.userBtnTxt}>Message</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.userBtn} onPress={() => {}}>
										<Text style={styles.userBtnTxt}>Follow</Text>
									</TouchableOpacity>
								</>
							) : (
								<>
									<TouchableOpacity
										style={styles.userBtn}
										onPress={() => {
											navigation.navigate('Profile Edit');
										}}>
										<Text style={styles.userBtnTxt}>Edit</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={styles.userBtn}
										onPress={() => onLogout()}>
										<Text style={styles.userBtnTxt}>Logout</Text>
									</TouchableOpacity>
								</>
							)}
						</View>

						<View style={styles.userInfoWrapper}>
							<View style={styles.userInfoItem}>
								<Card.Actions style={{ flexDirection: 'column' }}>
									<Spacer size='large'>
										<AuthButton
											mode='outlined'
											onPress={() => navigation.navigate('Drink Order Screen')}>
											Yes, Order A Drink!
										</AuthButton>
									</Spacer>
									<Spacer size='xlarge'>
										<AuthButton
											mode='contained'
											onPress={() => navigation.navigate('Map')}>
											Mobile Bar — Locations
										</AuthButton>
									</Spacer>
									<Spacer size='medium'>
										<AuthButton
											mode='outlined'
											onPress={() => navigation.navigate('How This Works')}>
											How Does This Work?
										</AuthButton>
									</Spacer>
								</Card.Actions>
							</View>
						</View>
						{/* </AccountInfoCard> */}
					</ScrollView>
				</Card>
			</CardContainer>
			{/* </AccountCover> */}
		</AccountCardBackground>
		// </SafeAreaView>
	);
};

export default ProfileScreen;

// style={{ flex: 1, backgroundColor: '#fff' }}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		// opacity: 0.25,
	},
	userImg: {
		height: 150,
		width: 150,
		borderRadius: 75,
	},
	userName: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 10,
		marginBottom: 10,
	},
	aboutUser: {
		fontSize: 12,
		fontWeight: '600',
		color: '#666',
		textAlign: 'center',
		marginBottom: 10,
	},
	userBtnWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
		marginBottom: 10,
	},
	userBtn: {
		borderColor: '#2e64e5',
		borderWidth: 2,
		borderRadius: 3,
		paddingVertical: 8,
		paddingHorizontal: 12,
		marginHorizontal: 5,
	},
	userBtnTxt: {
		color: '#2e64e5',
	},
	userInfoWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
		marginVertical: 20,
	},
	userInfoItem: {
		justifyContent: 'center',
	},
	userInfoTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 5,
		textAlign: 'center',
	},
	userInfoSubTitle: {
		fontSize: 12,
		color: '#666',
		textAlign: 'center',
	},
});

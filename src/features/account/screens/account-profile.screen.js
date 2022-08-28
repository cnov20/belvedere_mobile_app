import React, { useState, useEffect, useContext } from 'react';
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
} from '../components/account.styles';

// import { AuthContext } from '../navigation/AuthProvider';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import AccountInfoCard from '../components/account-info-card.component';

// import firestore from '@react-native-firebase/firestore';
// import PostCard from '../components/PostCard';

const ProfileScreen = ({ navigation, route }) => {
	// const [user, logout] = useContext(AuthContext);
	const { onLogout, user, auth } = useContext(AuthenticationContext);

	return (
		<SafeAreaView style={styles.container}>
			<AccountCardBackground>
				{/* <AccountCover> */}
				<CardContainer>
					<Card style={{ flex: 2 }}>
						<ScrollView
							style={styles.container}
							contentContainerStyle={{
								justifyContent: 'center',
								alignItems: 'center',
							}}
							showsVerticalScrollIndicator={false}>
							<Image
								style={styles.userImg}
								source={require('../../../../assets/user-8.jpg')}></Image>
							<Text style={styles.userName}>Jane(lle) Doe</Text>
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
									<Text style={styles.userInfoTitle}>20</Text>
									<Text style={styles.userInfoSubTitle}>Posts</Text>
								</View>
							</View>
							{/* </AccountInfoCard> */}
						</ScrollView>
					</Card>
				</CardContainer>
				{/* </AccountCover> */}
			</AccountCardBackground>
		</SafeAreaView>
	);
};

export default ProfileScreen;

// style={{ flex: 1, backgroundColor: '#fff' }}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#fff',
		padding: 20,
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

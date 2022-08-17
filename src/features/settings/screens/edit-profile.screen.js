import React, { useState } from 'react';
// import Images from '../config/Images';
// import {
// 	Button,
// 	Container,
// 	ScreenContainer,
// 	TextField,
// 	withTheme,
// } from '@draftbit/ui';
import {
	Image,
	KeyboardAvoidingView,
	StatusBar,
	StyleSheet,
	Text,
	// Container,
	Button,
	View,
	TouchableOpacity,
} from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
	AuthInput,
	AuthButton,
	Title,
} from '../../account/components/account.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';

import styled from 'styled-components';

import { List, Avatar } from 'react-native-paper';

const AvatarContainer = styled.View`
	align-items: center;
`;
export default function EditProfileScreen({ navigation, photo }) {
	const [nameFieldValue, setNameFieldValue] = useState(undefined);
	const [emailFieldValue, setEmailFieldValue] = useState(undefined);
	const [passwordFieldValue, setPasswordFieldValue] = useState(undefined);

	// const { theme } = props;

	console.log(photo);
	// console.log(pho)

	React.useEffect(() => {
		StatusBar.setBarStyle('dark-content');
	}, []);

	return (
		// <ScreenContainer scrollable={true} hasSafeArea={true}>
		// <KeyboardAvoidingView
		// 	style={styles.keyboardAvoidingView5A}
		// 	enabled={true}
		// 	// behavior=""padding""
		// 	keyboardVerticalOffset={60}>
		<>
			<SafeArea>
				<AvatarContainer>
					<Spacer position='top' size='large'></Spacer>
					<TouchableOpacity onPress={() => navigation.navigate('Camera')}>
						{!photo && (
							<Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
						)}
						{photo && (
							<Avatar.Image
								size={180}
								source={{ uri: photo }}
								backgroundColor='#2182BD'
							/>
						)}
					</TouchableOpacity>
				</AvatarContainer>
				<View
					// <ScreenContainer scrollable={true} hasSafeArea={true}>
					// <KeyboardAvoidingView
					// 	style={styles.keyboardAvoidingView5A}
					// 	enabled={true}
					// 	// behavior=""padding""
					// 	keyboardVerticalOffset={60}>
					style={styles.container9T}
					elevation={0}
					useThemeGutterPadding={true}>
					<Title
						style={StyleSheet.flatten([
							styles.textEa,
							// theme.typography.headline4,
							// { color: theme.colors.strong },
						])}>
						Edit Your Profile
					</Title>
					<Spacer size='large'>
						<AuthInput
							// style={styles.textFieldK7}
							type='underline'
							label='Name'
							// keyboardType=""default""
							// leftIconMode=""inset""
							value={nameFieldValue}
							onChangeText={(nameFieldValue) =>
								setNameFieldValue(nameFieldValue)
							}
						/>
					</Spacer>
					<Spacer size='large'>
						<AuthInput
							// style={styles.textField8U}
							type='underline'
							label='Email'
							keyboardType='email'
							// leftIconMode=""inset""
							value={emailFieldValue}
							onChangeText={(emailFieldValue) =>
								setEmailFieldValue(emailFieldValue)
							}
						/>
					</Spacer>
					<Spacer size='large'>
						<AuthInput
							// style={styles.textField8U}
							type='underline'
							label='Password'
							keyboardType='password'
							// leftIconMode=""inset""
							value={passwordFieldValue}
							onChangeText={(passwordFieldValue) =>
								setPasswordFieldValue(passwordFieldValue)
							}
						/>
					</Spacer>
					<Spacer size='large'>
						<AuthButton
							icon='lock-open-outline'
							mode='contained'
							// title='Continue'
							// style={styles.buttonUf}
							onPress={() => navigation.goBack()}>
							Continue
						</AuthButton>
					</Spacer>
				</View>
			</SafeArea>
		</>
	);
}

const styles = StyleSheet.create({
	container9T: {
		marginTop: 24,
		alignItems: 'center',
	},
	buttonUf: {
		height: 48,
		alignSelf: 'stretch',
	},
	keyboardAvoidingView5A: {
		flexGrow: 1,
		justifyContent: 'space-between',
	},
	textEa: {
		textAlign: 'center',
	},
	containerVk: {
		alignItems: 'center',
	},
	textUm: {
		marginTop: 16,
		textAlign: 'center',
	},
	imageSq: {
		width: 100,
		height: 100,
		marginTop: 24,
	},
	textFieldK7: {
		height: 82,
		marginTop: 16,
	},
	textField8U: {
		height: 82,
		marginTop: 16,
	},
});
// export default EditProfileScreen;

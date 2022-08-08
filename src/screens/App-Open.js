import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
// import { TextInput } from 'react-native-element-textinput';
import { Button } from '@rneui/base';
// import { Button } from "@rneui/themed";
// import { Input} from "@rneui/themed";

export default function AppOpen() {
	return (
		<ImageBackground
			source={require('/Users/chris/Repos/belvedere_mobile_app/assets/mwn-module-01-arm-with-bottle.jpeg')}
			style={styles.background}>
			<View>
				<Image
					source={require('/Users/chris/Repos/belvedere_mobile_app/assets/Belvedere-Logo.png')}
					style={styles.logo}
					resizeMode='contain'></Image>
				{/* <Text>TEST</Text> */}
				<Button style={styles.button} title={'SIGN IN'} />
				<Button style={styles.button} title={'CREATE ACCOUNT'} />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',
		opacity: 0.75,
	},
	logo: {
		width: 280,
		height: 280,
		marginLeft: '15%',
		marginTop: '10%',
		opacity: 0.25,
		shadowOpacity: 0.5,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		color: 'rgba(25,138,183,255)',
	},
});

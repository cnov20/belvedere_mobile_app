import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import Toggle from 'react-native-toggle-element';

{
	/* <Toggle
					value={toggleValue}
					onPress={(newState) => setToggleValue(newState)}
					rightTitle='On'
				/> */
}

const ToggleSwitch = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const handleChange = (isEnabled) => {};

	return (
		<View style={styles.container}>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor='#3e3e3e'
				onValueChange={toggleSwitch}
				value={isEnabled}
				handleChange={handleChange(isEnabled)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default ToggleSwitch;

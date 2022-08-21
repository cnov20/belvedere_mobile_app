import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import CarouselCards from '../../../components/UI/CarouselCards';

const HowThisWorksScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<CarouselCards />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 50,
	},
});

export default HowThisWorksScreen;

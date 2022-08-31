import React from 'react';

import { BelvedereMobileBarInfoCard } from '../components/belvedere-mobile-bar-info-card';

import { SafeArea } from '../../../components/utility/safe-area.component';

export const MobileBarDetailsScreen = ({ route }) => {
	const { bar } = route.params;
	return (
		<SafeArea>
			<BelvedereMobileBarInfoCard restaurant={bar} />
		</SafeArea>
	);
};

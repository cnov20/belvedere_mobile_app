import React, { useContext, useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

import styled from 'styled-components/native';

import { Search } from '../components/search.component';

const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`;

export const MapScreen = () => (
	<>
		<Search />
		<Map
			region={{
				latitude: 40.754932,
				longitude: -73.984016,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.021,
			}}
		/>
		<Marker />
	</>
);

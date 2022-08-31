import React from 'react';
import styled from 'styled-components/native';

import { CompactBelvedereMobileBarInfo } from '../../mobile-bars/compact-belvedere-mobile-bar-info.component';

const MyText = styled.Text``;
export const MapCallout = ({ bar }) => (
	<CompactBelvedereMobileBarInfo bar={bar} />
);

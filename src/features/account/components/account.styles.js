import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
// import { colors } from '../../../infrastructure/theme/colors';

export const AccountBackground = styled.ImageBackground.attrs({
	source: require('/Users/chris/Repos/belvedere_mobile_app/assets/mwn-module-01-arm-with-bottle.jpeg'),
})`
	flex: 1;
	align-items: center;
	justify-content: center;
`;
export const AccountCover = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.25);
`;

export const AccountContainer = styled.View`
	background-color: rgba(255, 255, 255, 0.75);
`;

export const AuthButton = styled(Button).attrs({
	// color: colors.brand.primary,
})``;

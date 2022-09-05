import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import { Text } from '../../../components/typography/text.component';

export const AccountBackground = styled.ImageBackground.attrs({
	source: require('../../../../assets/mwn-module-01-arm-with-bottle.jpeg'),
})`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const AccountCover = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.5);
`;

export const AccountContainer = styled.View`
	// background-color: rgba(255, 255, 255, 0.25);
	padding: ${(props) => props.theme.space[4]};
	margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
	color: colors.brand.primary,
})`
	// font-size: 10px;
	width: 250px;
	padding: ${(props) => props.theme.space[2]};
	align-items: center;
	align-self: center;
	justify-content: center;
`;

// export const AuthButtonOpaque = styled.Button`
// 	background-color: rgba(0, 255, 0, 0.5),
// 	padding: ${(props) => props.theme.space[2]};
// `;

export const AuthInput = styled(TextInput).attrs({
	color: colors.brand.secondary,
	selectionColor: colors.brand.primary,
	activeUnderlineColor: colors.brand.primary,
})`
	padding: ${(props) => props.theme.space[0]};
	width: 300px;
	// font-color: white;
`;

export const Title = styled(Text).attrs({
	color: colors.brand.primary,
})`
	font-size: 32px;
`;
export const ErrorContainer = styled.View`
	max-width: 300px;
	align-items: center;
	align-self: center;
	margin-top: ${(props) => props.theme.space[2]};
	margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
	width: 100%;
	height: 40%;
	position: absolute;
	top: 10px;
	padding: ${(props) => props.theme.space[2]};
`;

export const AccountCardBackground = styled.ImageBackground.attrs({
	source: require('../../../../assets/mwn-module-01-arm-with-bottle.jpeg'),
})`
	opacity: 1;
	// flex: 1;
	// align-items: center;
	// justify-content: center;
`;

export const CardButton = styled(Button).attrs({
	color: colors.brand.primary,
})`
	padding: ${(props) => props.theme.space[2]};
	width: 300px;
	flex-direction: column;
`;

export const CardContainer = styled.View`
	background-color: rgba(255, 255, 255, 0.5);
	padding: ${(props) => props.theme.space[4]};
	margin-top: ${(props) => props.theme.space[2]};
	width: 100%;
	height: 100%;
`;

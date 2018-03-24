import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

import { colors } from '../../config';

const shadow = {
	shadowOffset: { width: 2, height: 2 },
	shadowColor: colors.shadow,
	shadowOpacity: 0.5
};

const RoundButton = ({ children, onPress }) => (
	<TouchableOpacity
		style={{
			backgroundColor: colors.roundButton,
			borderRadius: 25,
			width: 50,
			height: 50,
			justifyContent: 'center',
			alignItems: 'center',
			...shadow
		}}
		onPress={onPress}
	>
		{children}
	</TouchableOpacity>
);

const HeaderButton = ({ type, onPress, color = colors.headerButton }) => (
	<TouchableOpacity onPress={onPress}>
		<Icon name={type} color={color} />
	</TouchableOpacity>
);

const HeaderBackButton = ({ onPress }) => <HeaderButton type="keyboard-backspace" onPress={onPress} />;

const AppHeader = ({ title, leftComponent, rightComponent }) => (
	<Header
		centerComponent={{
			text: title,
			style: { color: colors.headerText, fontSize: 16, fontWeight: 'bold' }
		}}
		rightComponent={rightComponent}
		leftComponent={leftComponent}
		backgroundColor={colors.headerBg}
		statusBarProps={{ barStyle: 'light-content' }}
		outerContainerStyles={{ borderBottomWidth: 0 }}
	/>
);

module.exports = {
	shadow,
	RoundButton,
	HeaderButton,
	HeaderBackButton,
	Header: AppHeader
};

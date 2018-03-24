import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const appBg = require('../../res/app_bg.jpg');

const shadow = {
	shadowOffset: { width: 2, height: 2 },
	shadowColor: 'black',
	shadowOpacity: 0.5
};

const RoundButton = ({ children, onPress }) => (
	<TouchableOpacity
		style={{
			backgroundColor: '#496fc2',
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

const HeaderButton = ({ type, onPress, color = '#fff' }) => (
	<TouchableOpacity onPress={onPress}>
		<Icon name={type} color={color} />
	</TouchableOpacity>
);

module.exports = {
	appBg,
	shadow,
	RoundButton,
	HeaderButton
};

import React from 'react';
import { View, Platform } from 'react-native';

import AppNavigation from './AppNavigation';
import { colors } from './config';

export default props => (
	<View style={{ flex: 1, backgroundColor: colors.bg }}>
		<AppNavigation {...props} />
	</View>
);

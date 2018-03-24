import React from 'react';
import { View, Platform } from 'react-native';

import AppNavigation from './AppNavigation';

export default props => (
	<View style={{ flex: 1, backgroundColor: '#03A9F4' }}>
		<AppNavigation {...props} />
	</View>
);

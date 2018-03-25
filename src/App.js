import React from 'react';
import { View, Platform } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './redux/reducers';
import AppNavigation from './AppNavigation';
import { colors } from './config';

export default props => (
	<Provider store={createStore(reducers)}>
		<View style={{ flex: 1, backgroundColor: colors.bg }}>
			<AppNavigation {...props} />
		</View>
	</Provider>
);

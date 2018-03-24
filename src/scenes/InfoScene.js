import React from 'react';
import { View, Text } from 'react-native';

import { Header, HeaderBackButton } from './components';
import { colors } from '../config';

export default ({ navigation: { goBack } }) => (
	<View style={{ flex: 1, backgroundColor: colors.bg }}>
		<Header leftComponent={<HeaderBackButton onPress={() => goBack()} />} title="About Todo App" />
		<View style={{ flex: 1, alignItems: 'center', padding: 25 }}>
			<Text style={{ fontSize: 18 }}>
				Life can feel overwhelming. But it doesn’t have to. With Todo app, you can keep track of everything – from
				simple errands like grocery shopping, to your most ambitious projects – so you can start getting things done and
				enjoy more peace-of-mind along the way. When you don’t have to worry about forgetting to-dos, you’ll feel more
				calm, in control and motivated to accomplish your goals. Todo app helps get all your tasks and thoughts out of
				your head and onto your to-do list anytime. Even when you’re offline.
			</Text>
		</View>
	</View>
);

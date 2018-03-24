import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Header } from 'react-native-elements';

import { appBg, HeaderButton } from './components';

export default ({ navigation: { goBack } }) => (
	<ImageBackground source={appBg} style={{ flex: 1 }}>
		<Header
			leftComponent={<HeaderButton type="keyboard-backspace" color="#fff" onPress={() => goBack()} />}
			centerComponent={{ text: 'About TODO List App', style: { color: '#fff', fontSize: 16, fontWeight: 'bold' } }}
			backgroundColor="#496fc2"
			statusBarProps={{ barStyle: 'light-content' }}
		/>
		<View style={{ flex: 1, alignItems: 'center', padding: 25 }}>
			<Text style={{ fontSize: 18 }}>
				Life can feel overwhelming. But it doesn’t have to. With Todo app, you can keep track of everything – from
				simple errands like grocery shopping, to your most ambitious projects – so you can start getting things done and
				enjoy more peace-of-mind along the way. When you don’t have to worry about forgetting to-dos, you’ll feel more
				calm, in control and motivated to accomplish your goals. Todo app helps get all your tasks and thoughts out of
				your head and onto your to-do list anytime. Even when you’re offline.
			</Text>
		</View>
	</ImageBackground>
);

import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';

import { appBg, HeaderButton } from './components';

export default class MainScene extends React.Component {
	constructor(props) {
		super(props);
		this.onInfoTapped = this.onInfoTapped.bind(this);
	}

	onInfoTapped() {
		this.props.navigation.navigate('InfoScene');
	}

	render() {
		return (
			<ImageBackground source={appBg} style={styles.container}>
				<Header
					centerComponent={{ text: 'TODO List', style: { color: '#fff', fontSize: 16, fontWeight: 'bold' } }}
					rightComponent={<HeaderButton type="info" color="#fff" onPress={this.onInfoTapped} />}
					backgroundColor="#496fc2"
					statusBarProps={{ barStyle: 'light-content' }}
				/>
				<Text>I'm the MainScene component</Text>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});

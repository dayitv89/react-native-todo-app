import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

import Imgs from '../imgs';
import { HeaderBackButton, Header } from './components';

export default class DetailScene extends Component {
	render() {
		return (
			<ImageBackground source={Imgs.appBg} style={styles.container}>
				<Header leftComponent={<HeaderBackButton onPress={() => this.props.navigation.goBack()} />} title="Todo Task" />
				<Text>I'm the DetailScene component</Text>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray'
	}
});

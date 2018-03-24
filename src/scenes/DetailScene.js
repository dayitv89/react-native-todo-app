import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground, Text, StyleSheet, Alert } from 'react-native';

import Imgs from '../imgs';
import { HeaderBackButton, Header, TextField, Button } from './components';
import { colors } from '../config';

import { TodoModel } from '../model';

export default class DetailScene extends Component {
	constructor(props) {
		super(props);
		const { name, desc, date } = props.data;
		this.state = { name, desc, date };
	}

	render() {
		return (
			<ImageBackground source={Imgs.appBg} style={styles.container}>
				<Header leftComponent={<HeaderBackButton onPress={() => this.props.navigation.goBack()} />} title="Todo Task" />
				<View style={{ flex: 1, padding: 10, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
					<TextField label="Task name*" value={this.state.name} onChangeText={v => this.setState({ name: v })} />
					<TextField label="Task description" value={this.state.desc} onChangeText={v => this.setState({ desc: v })} />
					<TextField label="Task date & time*" value={this.state.date} onChangeText={v => this.setState({ date: v })} />
					<Text>*Fields are mandatory to fill</Text>
					<Button
						icon={{ name: 'save' }}
						title="Save Task"
						onPress={() => {
							const { name, desc, date } = this.state;
							if (!name || !date) {
								Alert.alert('Oops!', 'Please fill the mandatory fields');
							} else {
								const aTodo = new TodoModel({ name, desc, date });
								console.warn(JSON.stringify(aTodo, null, 2));
								// TODO: save this model into persisting storage
							}
						}}
					/>
				</View>
			</ImageBackground>
		);
	}
}

DetailScene.propTypes = {
	data: PropTypes.object
};

DetailScene.defaultProps = {
	data: { id: null, name: '', desc: '', date: '' }
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bg
	},
	inputContainer: {
		height: '8%',
		marginHorizontal: 10,
		marginVertical: 5,
		padding: 5,
		backgroundColor: colors.inputTextBg
	}
});

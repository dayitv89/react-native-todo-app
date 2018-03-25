import React from 'react';
import { View, Text } from 'react-native';
import { Header, HeaderBackButton } from './components';
import { colors } from '../config';
import { TodoManager } from '../model';

export default class ProfileScene extends React.Component {
	render() {
		const allTask = TodoManager.getAll();
		const completed = allTask.filter(i => i.completed).length;
		const expired = allTask.filter(i => i.isExpired()).length;
		return (
			<View style={{ flex: 1, backgroundColor: colors.bg }}>
				<Header leftComponent={<HeaderBackButton onPress={() => this.props.navigation.goBack()} />} title="Profile" />
				<View style={{ flex: 1, alignItems: 'center', padding: 25 }}>
					<Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Task: {allTask.length}</Text>
					<Text>Total completed: {completed}</Text>
					<Text>Total incompleted: {allTask.length - completed}</Text>
					<Text>Total expired: {expired}</Text>
					<Text>Total upcoming: {allTask.length - expired}</Text>
				</View>
			</View>
		);
	}
}

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';

import { colors } from '../config';
import { TodoManager } from '../model';

export default class TodoList extends React.Component {
	renderCell = ({ item, index }) => {
		return (
			<TouchableOpacity onPress={() => this.props.onCellTapped(item)}>
				<Card
					title={item.name}
					containerStyle={{
						borderRadius: 5,
						overflow: 'hidden',
						marginBottom: index + 1 === this.props.data.length ? 15 : 0
					}}
				>
					{item.desc && <Text style={{ marginBottom: 10 }}>{item.desc}</Text>}
					<View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
						<Text style={{ marginBottom: 10 }}>⏰{item.date}</Text>
						<Text style={{ marginBottom: 10, color: item.isExpired() ? colors.expired : colors.nonexpired }}>
							{item.humanize()}
						</Text>
					</View>
					{!item.isExpired() && (
						<Button
							buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
							icon={{ name: item.completed ? 'close' : 'done' }}
							backgroundColor={item.completed ? colors.incompleted : colors.completed}
							title={`Mark as ${item.completed ? 'incompleted' : 'completed'}`}
							onPress={() => TodoManager.toogleCompletion(item)}
						/>
					)}
				</Card>
			</TouchableOpacity>
		);
	};

	render() {
		if (this.props.data && this.props.data.length > 0) {
			return <FlatList data={this.props.data} renderItem={this.renderCell} keyExtractor={i => i.id} />;
		}
		return (
			<View style={{ flex: 1, alignItems: 'center', padding: 30 }}>
				<Text style={{ fontSize: 15 }}>
					There is no todo available, you can add item by pressing the menu button at right bottom side.
				</Text>
			</View>
		);
	}
}

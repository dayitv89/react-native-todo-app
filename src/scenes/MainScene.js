import React from 'react';
import { Text, ImageBackground, FlatList, View, Alert } from 'react-native';
import { SearchBar, Card, Button } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';

import Imgs from '../imgs';
import { TodoModel, TodoManager } from '../model';
import { Header, HeaderButton } from './components';
import { colors } from '../config';

const actions = [
	{
		text: 'About app',
		icon: Imgs.about,
		name: 'bt_about',
		color: colors.primary,
		position: 1
	},
	{
		text: 'Settings',
		icon: Imgs.settings,
		name: 'bt_settings',
		color: colors.primary,
		position: 2
	},
	{
		text: 'Search',
		icon: Imgs.search,
		name: 'bt_search',
		color: colors.primary,
		position: 3
	},
	{
		text: 'Add new task',
		icon: Imgs.add,
		name: 'bt_add_new',
		color: colors.green,
		position: 4
	}
];

export default class MainScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
		setTimeout(() => this.setState({ data: TodoManager.getAll() }), 200);
		this.onInfoTapped = this.onInfoTapped.bind(this);
		this.onDetailTapped = this.onDetailTapped.bind(this);
		this.onFilterTapped = this.onFilterTapped.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.onFloatMenu = this.onFloatMenu.bind(this);
		this.renderCell = this.renderCell.bind(this);
	}

	onSearch(text) {
		this.setState({ data: TodoManager.find(text) });
	}

	onFloatMenu(btnName) {
		switch (btnName) {
			case 'bt_about':
				this.onInfoTapped();
				break;
			case 'bt_settings':
				this.props.navigation.navigate('SettingScene');
				break;
			case 'bt_search':
				this.searchBar.focus();
				break;
			case 'bt_add_new':
				this.onDetailTapped();
				break;
		}
	}

	onInfoTapped() {
		this.props.navigation.navigate('InfoScene');
	}

	onDetailTapped(data = null) {
		this.props.navigation.navigate('DetailScene', data ? { data } : undefined);
	}

	onFilterTapped() {
		Alert.alert(
			'Filter Tasks',
			'Choose type of tasks',
			[
				{
					text: 'Show all',
					onPress: () => this.setState({ data: TodoManager.getAll() }),
					style: 'cancel'
				},
				{ text: 'Completed tasks', onPress: () => this.setState({ data: TodoManager.getAllCompleted() }) },
				{ text: 'Incompleted tasks', onPress: () => this.setState({ data: TodoManager.getAllIncompleted() }) },
				{ text: 'Expired tasks', onPress: () => this.setState({ data: TodoManager.getAllExpired() }) },
				{ text: 'Upcoming tasks', onPress: () => this.setState({ data: TodoManager.getAllUpcoming() }) }
			],
			{ cancelable: false }
		);
	}

	renderCell({ item, index }) {
		return (
			<Card
				title={item.name}
				containerStyle={{
					borderRadius: 5,
					overflow: 'hidden',
					marginBottom: index + 1 === this.state.data.length ? 15 : 0
				}}
			>
				{item.desc && <Text style={{ marginBottom: 10 }}>{item.desc}</Text>}
				<View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
					<Text style={{ marginBottom: 10 }}>⏰{item.date}</Text>
					<Text style={{ marginBottom: 10 }}>{item.humanize()}</Text>
				</View>
				<Button
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					icon={{ name: item.completed ? 'close' : 'done' }}
					backgroundColor={item.completed ? colors.incompleted : colors.completed}
					title={`Mark as ${item.completed ? 'incompleted' : 'completed'}`}
				/>
			</Card>
		);
	}

	renderList() {
		if (this.state.data && this.state.data.length > 0) {
			return <FlatList data={this.state.data} renderItem={this.renderCell} keyExtractor={i => i.id} />;
		}
		return (
			<View style={{ flex: 1, alignItems: 'center', padding: 30 }}>
				<Text style={{ fontSize: 15 }}>
					There is no todo available, you can add item by pressing the menu button at right bottom side.
				</Text>
			</View>
		);
	}

	render() {
		return (
			<ImageBackground
				source={Imgs.appBg}
				style={{
					flex: 1,
					backgroundColor: 'white'
				}}
			>
				<Header
					title="Todo List"
					leftComponent={<HeaderButton type="info" onPress={this.onInfoTapped} />}
					rightComponent={<HeaderButton type="filter-list" onPress={this.onFilterTapped} />}
				/>
				<SearchBar
					ref={o => (this.searchBar = o)}
					placeholder="Search task by name or description ..."
					onChangeText={this.onSearch}
					lightTheme
					containerStyle={{ backgroundColor: colors.primary, borderTopWidth: 0, borderBottomWidth: 0 }}
					inputStyle={{ backgroundColor: colors.inputTextBg, color: colors.inputText }}
					returnKeyType="search"
				/>
				{this.renderList()}
				<FloatingAction
					floatingIcon={Imgs.more}
					actions={actions}
					onPressItem={this.onFloatMenu}
					buttonColor={colors.roundButton}
				/>
			</ImageBackground>
		);
	}
}

import React from 'react';
import { Text, ImageBackground, View, Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';

import TodoList from './TodoList';
import Imgs from '../imgs';
import { TodoManager } from '../model';
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
		text: 'Filter list',
		icon: Imgs.filter,
		name: 'bt_filter',
		color: colors.primary,
		position: 2
	},
	{
		text: 'Settings',
		icon: Imgs.settings,
		name: 'bt_settings',
		color: colors.primary,
		position: 3
	},
	{
		text: 'Search',
		icon: Imgs.search,
		name: 'bt_search',
		color: colors.primary,
		position: 4
	},
	{
		text: 'Add new task',
		icon: Imgs.add,
		name: 'bt_add_new',
		color: colors.green,
		position: 5
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
	}

	onSearch(text) {
		this.setState({ data: TodoManager.find(text) });
	}

	onFloatMenu(btnName) {
		switch (btnName) {
			case 'bt_about':
				this.onInfoTapped();
				break;
			case 'bt_filter':
				this.onFilterTapped();
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

	render() {
		return (
			<ImageBackground source={Imgs.appBg} style={{ flex: 1, backgroundColor: 'white' }}>
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
				<TodoList data={this.state.data} onCellTapped={this.onDetailTapped} />
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

import React from 'react';
import PropTypes from 'prop-types';
import { Text, ImageBackground, Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import Imgs from '../imgs';
import { Header, HeaderButton, TodoList } from './components';
import { colors } from '../config';

const actionsFab = [
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
		text: 'Profile',
		icon: Imgs.settings,
		name: 'bt_profile',
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

class MainScene extends React.Component {
	constructor(props) {
		super(props);
		this.filter = 'all';
		this.props.allTodoData();
	}

	onFloatMenu = btnName => {
		switch (btnName) {
			case 'bt_about':
				this.onInfoTapped();
				break;
			case 'bt_filter':
				this.onFilterTapped();
				break;
			case 'bt_profile':
				this.props.navigation.navigate('ProfileScene');
				break;
			case 'bt_search':
				this.searchBar.focus();
				break;
			case 'bt_add_new':
				this.onDetailTapped();
				break;
		}
	};

	onFilterTapped = () => {
		Alert.alert(
			'Filter Tasks',
			'Choose type of tasks',
			[
				{
					text: 'Show all',
					onPress: () => {
						this.filter = 'all';
						this.props.allTodoData();
					},
					style: 'cancel'
				},
				{
					text: 'Completed tasks',
					onPress: () => {
						this.filter = 'completed';
						this.props.completedTodoData();
					}
				},
				{
					text: 'Incompleted tasks',
					onPress: () => {
						this.filter = 'incompleted';
						this.props.incompletedTodoData();
					}
				},
				{
					text: 'Expired tasks',
					onPress: () => {
						this.filter = 'expired';
						this.props.expiredTodoData();
					}
				},
				{
					text: 'Upcoming tasks',
					onPress: () => {
						this.filter = 'upcoming';
						this.props.upcomingTodoData();
					}
				}
			],
			{ cancelable: false }
		);
	};

	onInfoTapped = () => {
		this.props.navigation.navigate('InfoScene');
	};

	onDetailTapped = (data = null) => {
		this.props.navigation.navigate('DetailScene', data ? { data } : undefined);
	};

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
					onChangeText={t => this.props.searchTodoData(t)}
					lightTheme
					containerStyle={{ backgroundColor: colors.primary, borderTopWidth: 0, borderBottomWidth: 0 }}
					inputStyle={{ backgroundColor: colors.inputTextBg, color: colors.inputText }}
					returnKeyType="search"
				/>
				<TodoList
					onCellTapped={this.onDetailTapped}
					toogleCompletion={i => this.props.toogleCompletionTodo(i, this.filter)}
				/>
				<FloatingAction
					floatingIcon={Imgs.more}
					actions={actionsFab}
					onPressItem={this.onFloatMenu}
					color={colors.roundButton}
				/>
			</ImageBackground>
		);
	}
}

MainScene.propTypes = {
	allTodoData: PropTypes.func.isRequired,
	completedTodoData: PropTypes.func.isRequired,
	incompletedTodoData: PropTypes.func.isRequired,
	expiredTodoData: PropTypes.func.isRequired,
	upcomingTodoData: PropTypes.func.isRequired,
	searchTodoData: PropTypes.func.isRequired,
	toogleCompletionTodo: PropTypes.func.isRequired
};

MainScene.defaultProps = {
	allTodoData: () => null,
	completedTodoData: () => null,
	incompletedTodoData: () => null,
	expiredTodoData: () => null,
	upcomingTodoData: () => null,
	searchTodoData: () => null,
	toogleCompletionTodo: () => null
};

export default connect(null, { ...actions })(MainScene);

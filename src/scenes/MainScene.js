import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';

import Imgs from '../imgs';
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
		this.onInfoTapped = this.onInfoTapped.bind(this);
		this.onDetailTapped = this.onDetailTapped.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.onFloatMenu = this.onFloatMenu.bind(this);
	}

	onSearch(text) {}

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

	render() {
		return (
			<ImageBackground source={Imgs.appBg} style={styles.container}>
				<Header title="Todo List" rightComponent={<HeaderButton type="info" onPress={this.onInfoTapped} />} />
				<SearchBar
					ref={o => (this.searchBar = o)}
					placeholder="Search task by name or description ..."
					onChangeText={this.onSearch}
					lightTheme
					containerStyle={{ backgroundColor: colors.primary, borderTopWidth: 0, borderBottomWidth: 0 }}
					inputStyle={{ backgroundColor: colors.inputTextBg, color: colors.inputText }}
					returnKeyType="search"
				/>
				<Text>I'm the MainScene component</Text>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});

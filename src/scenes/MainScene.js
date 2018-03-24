import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';

import { Header, HeaderButton } from './components';
import Imgs from '../imgs';

const actions = [
	{
		text: 'About app',
		icon: Imgs.about,
		name: 'bt_about',
		color: '#2980b9',
		position: 1
	},
	{
		text: 'Settings',
		icon: Imgs.settings,
		name: 'bt_settings',
		color: '#2980b9',
		position: 2
	},
	{
		text: 'Search',
		icon: Imgs.search,
		name: 'bt_search',
		color: '#2980b9',
		position: 3
	},
	{
		text: 'Add new task',
		icon: Imgs.add,
		name: 'bt_add_new',
		color: '#1abc9c',
		position: 4
	}
];

export default class MainScene extends React.Component {
	constructor(props) {
		super(props);
		this.onInfoTapped = this.onInfoTapped.bind(this);
		this.onDetailTapped = this.onDetailTapped.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.onClearSearch = this.onClearSearch.bind(this);
		this.onFloatMenu = this.onFloatMenu.bind(this);
	}

	onSearch(text) {}

	onClearSearch(text) {}

	onFloatMenu(btnName) {
		switch (btnName) {
			case 'bt_about':
				this.onInfoTapped();
				break;
			case 'bt_settings':
				console.warn(btnName);
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
		this.props.navigation.navigate('DetailScene', { data });
	}

	render() {
		return (
			<ImageBackground source={Imgs.appBg} style={styles.container}>
				<Header
					title="TODO List"
					rightComponent={<HeaderButton type="info" color="#fff" onPress={this.onInfoTapped} />}
				/>
				<SearchBar
					ref={o => (this.searchBar = o)}
					placeholder="Search task by name or description ..."
					onChangeText={this.onSearch}
					onClearText={this.onClearSearch}
					lightTheme
					containerStyle={{ backgroundColor: '#2980b9', borderTopWidth: 0, borderBottomWidth: 0 }}
					inputStyle={{ backgroundColor: 'rgb(244, 244, 244)' }}
				/>
				<Text>I'm the MainScene component</Text>
				<FloatingAction
					floatingIcon={Imgs.more}
					actions={actions}
					onPressItem={this.onFloatMenu}
					buttonColor="#2980b9"
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

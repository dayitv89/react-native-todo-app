import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { View, ImageBackground, Text, StyleSheet, Alert } from 'react-native';

import Imgs from '../imgs';
import { HeaderBackButton, Header, TextField, Button } from './components';
import { colors } from '../config';

import { TodoModel, TodoManager } from '../model';

const dateFormat = 'MMM DD, YYYY hh:mm A';
export default class DetailScene extends Component {
	constructor(props) {
		super(props);
		const { name, desc, date } = props.data;
		this.state = { name, desc, date: date || moment(new Date()).format(dateFormat) };
	}

	onDateSelected(date) {
		this.setState({ date });
	}

	renderDatePicker() {
		return (
			<DatePicker
				style={{ width: 200 }}
				ref={o => (this.datePicker = o)}
				mode="datetime"
				date={this.state.date}
				placeholder="set date & time"
				format={dateFormat}
				minDate={new Date()}
				hideText
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				showIcon={false}
				onDateChange={this.onDateSelected.bind(this)}
				customStyles={{
					btnTextConfirm: {
						height: 20
					},
					btnTextCancel: {
						height: 20
					}
				}}
			/>
		);
	}

	render() {
		return (
			<ImageBackground source={Imgs.appBg} style={styles.container}>
				<Header leftComponent={<HeaderBackButton onPress={() => this.props.navigation.goBack()} />} title="Todo Task" />
				<View style={{ flex: 1, padding: 10, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
					<TextField label="Task name*" value={this.state.name} onChangeText={v => this.setState({ name: v })} />
					<TextField label="Task description" value={this.state.desc} onChangeText={v => this.setState({ desc: v })} />
					<TextField
						label="Task date & time*"
						value={this.state.date}
						onChangeText={v => this.setState({ date: v })}
						onFocus={() => this.datePicker.onPressDate()}
					/>
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
								TodoManager.save(aTodo).then(() => this.props.navigation.goBack());
							}
						}}
					/>
					{this.renderDatePicker()}
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

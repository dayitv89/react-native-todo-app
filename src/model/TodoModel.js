import Utils from './Utils';
import JSModel from 'react-native-jsmodel';
import moment from 'moment';

const getJSON = json => ({
	id: Utils.uuid(),
	name: '',
	desc: '',
	date: '',
	completed: false,
	createdAt: new Date(),
	updatedAt: new Date(),
	...json
});

export default class TodoModel extends JSModel {
	constructor(json) {
		super(getJSON(json));
	}

	diff() {
		return moment(this.date) - moment();
	}

	isExpired() {
		return this.diff() <= 0;
	}

	humanize() {
		if (this.isExpired()) {
			return `${this.completed ? '👍' : '👎'} Task expired`;
		}
		return moment.duration(this.diff()).humanize() + ' remaining';
	}

	toogleCompletion() {
		this.completed = !this.completed;
	}

	updateInfo({ name, desc, date }) {
		this.name = name || this.name;
		this.desc = desc || this.desc;
		this.date = date || this.date;
	}
}

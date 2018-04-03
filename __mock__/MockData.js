import TodoModel from './src/model/TodoModel';
import moment from 'moment';

class MockData {
	constructor() {
		this.dateNow = new Date();
		this.dateFormat = 'MMM DD, YYYY hh:mm A';
	}

	_add = (time = 0) => {
		if (time === 0) {
			return moment(this.dateNow).format(this.dateFormat);
		}
		return moment(this.dateNow)
			.add(time, 'hours')
			.format(this.dateFormat);
	};

	_newModel = (index, time) => {
		const name = 'Something name: ' + index;
		const desc = 'Something desc: ' + index;
		const date = this._add(time);
		return new TodoModel({ name, desc, date });
	};

	_shuffle = a => {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	};

	createMockData = (count = 30, shuffle = true) => {
		const allMockTodo = [];
		for (let i = 0; i < count; i++) {
			allMockTodo.push(this._newModel(i + 1, i));
		}
		return shuffle ? this._shuffle(allMockTodo) : allMockTodo;
	};
}

const newMockData = new MockData().createMockData();
export default newMockData;

import Utils from './Utils';
import JSModel from 'react-native-jsmodel';

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
}

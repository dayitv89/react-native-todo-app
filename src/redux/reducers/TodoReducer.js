'use strict';

export default function TodoReducer(state = null, action) {
	switch (action.type) {
		case 'TODO_DATA':
			return action.payload;
		default:
			return state;
	}
}

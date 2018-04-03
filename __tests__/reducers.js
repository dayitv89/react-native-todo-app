import TodoReducer from '../src/redux/reducers/TodoReducer';

describe('My App reducers testing', () => {
	it('reducer works fine [positive]', () => {
		const payload = 'something';
		expect(TodoReducer(null, { type: 'TODO_DATA', payload })).toEqual(payload);
	});

	it('reducer works fine missing type [negative]', () => {
		const payload = 'something';
		expect(TodoReducer(null, { type: 'SOMETHING_ELSE', payload })).toEqual(null);
	});

	it('reducer works fine missing payload [negative]', () => {
		const payload1 = 'something';
		expect(TodoReducer(null, { type: 'TODO_DATA', payload1 })).toEqual(undefined);
	});
});

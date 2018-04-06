import 'react-native';
import TodoActions from '../src/redux/actions';
import { TodoManager, TodoModel, AllTodos } from '../src/model';
import MockTodos from '../__mock__/MockTodos.json';
import moment from 'moment';
describe('My App actions testing', () => {
	beforeEach(() => {
		TodoManager.allTodos = new AllTodos(MockTodos);
	});

	it('allTodoData fine [positive]', () => {
		expect(TodoActions.allTodoData()).toMatchSnapshot();
		console.warn(moment());
		// expect(TodoManager.allTodos).toMatchSnapshot();
	});
});

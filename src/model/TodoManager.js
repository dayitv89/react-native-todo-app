import { AsyncStorage } from 'react-native';
import JSModel from 'react-native-jsmodel';

import TodoModel from './TodoModel';

class AllTodos {
	constructor(json) {
		this.allTodo = json.map(i => new TodoModel(i));
	}

	getSorted() {
		const allSorted = this.allTodo.sort((t1, t2) => t1.diff() - t2.diff());
		const completed = [];
		const expired = [];
		const incompleted = [];
		allSorted.forEach(i => {
			if (i.isExpired()) {
				expired.push(i);
			} else if (i.completed) {
				completed.push(i);
			} else {
				incompleted.push(i);
			}
		});
		return [...incompleted, ...completed, ...expired];
	}

	find(text = '') {
		if (text === '' || text === null) {
			return this.allTodo;
		}
		const t = text.toLowerCase();
		return this.allTodo.filter(i => i.name.toLowerCase().includes(t) || i.desc.toLowerCase().includes(t));
	}

	findCompleted() {
		return this.allTodo.filter(i => i.completed);
	}

	findIncompleted() {
		return this.allTodo.filter(i => !i.completed);
	}

	hasItem(todo) {
		return !!todo && this.allTodo.some(i => i.id === todo.id);
	}

	updateItem(todo) {
		todo.updatedAt = new Date();
		this.allTodo.forEach(i => {
			if (i.id === todo.id) i = todo;
		});
	}

	insertItem(todo) {
		todo.updatedAt = new Date();
		this.allTodo.push(todo);
	}

	updateOrInsert(todo): Bool {
		if (!!todo) {
			let alreadyHas = false;
			this.allTodo.forEach(i => {
				if (i.id === todo.id) {
					alreadyHas = true;
					i.updateInfo(todo);
				}
			});
			if (!alreadyHas) {
				this.insertItem(todo);
			}
			return true;
		}
		return false;
	}

	toJSON() {
		return JSON.stringify(this.allTodo);
	}
}

const kTodoStore = '@UserTodos';
class TodoManager {
	constructor() {
		this.allTodos = new AllTodos([]);
		AsyncStorage.getItem(kTodoStore).then(data => {
			if (data) {
				data = JSON.parse(data);
				if (data.length > 0) {
					this.allTodos = new AllTodos(data);
				}
			}
		});
	}

	getAll() {
		return this.allTodos.getSorted();
	}

	getAllCompleted() {
		return this.getAll().filter(t => t.completed);
	}

	getAllIncompleted() {
		return this.getAll().filter(t => !t.completed);
	}

	getAllExpired() {
		return this.getAll().filter(t => t.diff() <= 0);
	}

	getAllUpcoming() {
		return this.getAll().filter(t => t.diff() > 0);
	}

	find(text) {
		return this.allTodos.find(text);
	}

	save(todo: TodoModel) {
		if (this.allTodos.updateOrInsert(todo)) {
			return AsyncStorage.setItem(kTodoStore, this.allTodos.toJSON());
		}
	}

	toogleCompletion(todo: TodoModel) {
		todo.toogleCompletion();
		this.save(todo);
	}
}

const sharedTodoManager = new TodoManager();
export default sharedTodoManager;

'use strict';

import { TodoManager } from '../../model';

export function allTodoData() {
	return {
		type: 'TODO_DATA',
		payload: TodoManager.getAll()
	};
}

export function completedTodoData() {
	return {
		type: 'TODO_DATA',
		payload: TodoManager.getAllCompleted()
	};
}

export function incompletedTodoData() {
	return {
		type: 'TODO_DATA',
		payload: TodoManager.getAllIncompleted()
	};
}

export function expiredTodoData() {
	return {
		type: 'TODO_DATA',
		payload: TodoManager.getAllExpired()
	};
}

export function upcomingTodoData() {
	return {
		type: 'TODO_DATA',
		payload: TodoManager.getAllUpcoming()
	};
}

export function searchTodoData(text = '') {
	return {
		type: 'TODO_DATA',
		payload: TodoManager.find(text)
	};
}

export function toogleCompletionTodo(todo, type = 'all') {
	TodoManager.toogleCompletion(todo);
	switch (type) {
		case 'completed':
			return completedTodoData();
		case 'incompleted':
			return incompletedTodoData();
		case 'expired':
			return expiredTodoData();
		case 'upcoming':
			return upcomingTodoData();
		default:
			return allTodoData();
	}
}

export function saveTodo(todo) {
	TodoManager.save(todo);
	return allTodoData();
}

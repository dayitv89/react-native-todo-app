export default class Utils {
	static uuid() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			var r = (Math.random() * 16) | 0,
				v = c == 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}

	static move(array, fromIndex, toIndex) {
		return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
	}

	static findTodo(todo, todoList) {
		return todoList.find(item => item.title.toLowerCase() === todo.title.toLowerCase());
	}
}

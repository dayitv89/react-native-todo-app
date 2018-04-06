// global.Date = jest.fn();
// 2018-04-06T12:30:49.271
// import moment from 'moment';
// jest.mock('moment', arg => (arg ? moment(arg) : '2018-04-06T12:30:49.271'));

// import TodoManager from '../src/model/TodoManager';
// TodoManager.allTodos = require('./MockData');
// jest.mock('../src/model/TodoManager', () => ({
// 	allTodos: require('./MockData')
// }));

// jest.mock('react-native', () => {
// 	const items = { '@UserTodos': require('./MockData') };
// 	return {
// 		AsyncStorage: {
// 			setItem: jest.fn((item, value) => {
// 				return new Promise((resolve, reject) => {
// 					items[item] = value;
// 					resolve(value);
// 				});
// 			}),
// 			multiSet: jest.fn((item, value) => {
// 				return new Promise((resolve, reject) => {
// 					items[item] = value;
// 					resolve(value);
// 				});
// 			}),
// 			getItem: jest.fn((item, value) => {
// 				return new Promise((resolve, reject) => {
// 					resolve(items[item]);
// 				});
// 			}),
// 			multiGet: jest.fn(item => {
// 				return new Promise((resolve, reject) => {
// 					resolve(items[item]);
// 				});
// 			}),
// 			removeItem: jest.fn(item => {
// 				return new Promise((resolve, reject) => {
// 					resolve(delete items[item]);
// 				});
// 			}),
// 			getAllKeys: jest.fn(items => {
// 				return new Promise(resolve => {
// 					resolve(items.keys());
// 				});
// 			})
// 		}
// 	};
// });

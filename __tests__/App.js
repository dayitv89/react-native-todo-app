// import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App';

describe('My App unit testing', () => {
	it('renders correctly App', () => {
		const tree = renderer.create(<App />);
		expect(tree).toMatchSnapshot();
	});
});

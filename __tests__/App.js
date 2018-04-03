import 'react-native';
import React from 'react';
import App from '../src/App';
import Scenes from '../src/scenes';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('My App unit testing', () => {
	it('renders correctly App', () => {
		const tree = renderer.create(<App />);
		expect(tree).toMatchSnapshot();
	});
});

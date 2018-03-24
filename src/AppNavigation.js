import { StackNavigator } from 'react-navigation';
import { StackNavigatorHelper } from 'react-navigation-helper';

import Scenes from './scenes';

export default StackNavigatorHelper.exportStackNavigator(
	StackNavigator(
		{
			MainScene: { screen: StackNavigatorHelper.setInitParamsToProps(Scenes.MainScene) },
			DetailScene: { screen: StackNavigatorHelper.paramsToProps(Scenes.DetailScene) },
			InfoScene: {
				screen: StackNavigatorHelper.paramsToProps(Scenes.InfoScene),
				navigationOptions: { gesturesEnabled: false }
			}
		},
		{
			cardStyle: {
				backgroundColor: 'transparent',
				shadowColor: 'transparent'
			},
			headerMode: 'none',
			transitionConfig: () =>
				StackNavigatorHelper.transitionConfig({
					InfoScene: 'present'
				})
		}
	)
);

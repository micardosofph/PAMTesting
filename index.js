import { registerRootComponent } from 'expo';

import App from './App';
import Page1 from './src/screens/HomeScreen';
import Page2 from './src/screens/Page2';

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import Routes from "./src";

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Page1,
    About: Page2,
  })
);

registerRootComponent(App);
AppRegistry.registerComponent(appName, () => Routes);

export default Routes;



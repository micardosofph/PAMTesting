import { registerRootComponent } from 'expo';

import App from './App';

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

registerRootComponent(App);
AppRegistry.registerComponent(appName, () => Routes);

export default Routes;
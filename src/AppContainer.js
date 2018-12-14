import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import NotHomeScreen from './NotHomeScreen';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        NotHome: NotHomeScreen
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);
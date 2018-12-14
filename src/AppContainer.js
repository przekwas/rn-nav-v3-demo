import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import NotHomeScreen from './NotHomeScreen';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        NotHome: NotHomeScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091ea',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

export default createAppContainer(AppNavigator);
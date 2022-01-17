import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoryScreen from '../screens/CategoryScreen';
import MealScreen from '../screens/MealScreen';
import DetailScreen from '../screens/DetailScreen';
const MealNavigator = createStackNavigator(
    {
        Category: CategoryScreen,
        Meal: MealScreen,
        Detail: DetailScreen,
    },
    {
        defaultNavigationOptions: {
            headerTintColor: '#4a148c',
        }
    }
);
export default createAppContainer(MealNavigator);
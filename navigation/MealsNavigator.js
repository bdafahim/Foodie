import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CatagoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
        },
        CategoryMeals: {
            screen: CategoryMealScreen,
        },
        MealDetail: MealDetailScreen,
    },
    {
        initialRouteName: "Categories",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "",
            },
            headerTintColor: Colors.primaryColor,
        },
    }
);

export default createAppContainer(MealsNavigator);

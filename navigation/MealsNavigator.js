import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CatagoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import FavoriteScreen from "../screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
import MealDetailsScreen from "../screens/MealDetailScreen";
import FilterScreen from "../screens/FiltersScreen";

const defaultStackNAvOptions = {
    headerTitle: "A screen",
    headerStyle: {
        backgroundColor: "",
    },
    headerTintColor: Colors.primaryColor,
};

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
        defaultNavigationOptions: defaultStackNAvOptions,
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoriteScreen,
        MealDetail: MealDetailsScreen,
    },
    {
        defaultNavigationOptions: defaultStackNAvOptions,
    }
);

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabinfo) => {
                    return (
                        <Ionicons
                            name="ios-restaurant"
                            size={25}
                            color={tabinfo.tintColor}
                        />
                    );
                },
            },
        },
        Favorites: {
            screen: FavNavigator,
            navigationOptions: {
                tabBarIcon: (tabinfo) => {
                    return (
                        <Ionicons
                            name="ios-star"
                            size={25}
                            color={tabinfo.tintColor}
                        />
                    );
                },
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor,
        },
    }
);

const FiltersNavigator = createStackNavigator(
    {
        Filters: FilterScreen,
    },
    {
        // navigationOptions: {
        //     drawerLabel: "Filter",
        // },
        defaultNavigationOptions: defaultStackNAvOptions,
    }
);

const MainNavigator = createDrawerNavigator(
    {
        MealsFavs: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: "Meals",
            },
        },
        Filters: FiltersNavigator,
    },
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: "open-sans-bold",
            },
        },
    }
);

export default createAppContainer(MainNavigator);

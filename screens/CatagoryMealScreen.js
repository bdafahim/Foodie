import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam("categoryId");

    const displayMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );

    return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    mealDetailsButton: {
        marginTop: 20,
        backgroundColor: "#000000",
    },
    buttonText: {
        color: "white",
    },
});

export default CategoryMealScreen;

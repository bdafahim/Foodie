import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Meals from "../models/meal";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam("mealid");
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealid");
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default MealDetailsScreen;

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
import MealItem from "../components/MealItem";

const CategoryMealScreen = (props) => {
    const renderMealItem = (itemData) => {
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {}}
            />
        );
    };

    const catId = props.navigation.getParam("categoryId");

    const displayMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: "100%" }}
            />
            {/* <Text>{selectedCategory.title}</Text>
            <TouchableOpacity
                style={styles.mealDetailsButton}
                onPress={() => {
                    props.navigation.navigate({ routeName: "MealDetail" });
                }}
            >
                <Text style={styles.buttonText}>Go To MealDetails</Text>
            </TouchableOpacity> */}
        </View>
    );
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

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryMealScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>CategoryMealScreen</Text>
            <TouchableOpacity
                style={styles.mealDetailsButton}
                onPress={() => {
                    props.navigation.navigate({ routeName: "MealDetail" });
                }}
            >
                <Text style={styles.buttonText}>Go To MealDetails</Text>
            </TouchableOpacity>
        </View>
    );
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

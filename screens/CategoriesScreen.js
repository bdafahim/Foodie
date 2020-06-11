import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoriesScreen = (props) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <Text>Categories Screen</Text>
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    props.navigation.navigate({ routeName: "CategoryMeals" });
                }}
            >
                <Text style={styles.buttontext}>Go To Meals</Text>
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
    categoryButton: {
        marginTop: 20,
        backgroundColor: "#000000",
    },
    buttontext: {
        color: "white",
    },
});

export default CategoriesScreen;

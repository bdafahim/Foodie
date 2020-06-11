import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <View style={styles.gridItemStyle}>
                <Text>{itemData.item.title}</Text>
            </View>
        );
    };
    console.log(props);
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
            />
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
        justifyContent: "center",
    },
    categoryButton: {
        marginTop: 20,
        backgroundColor: "#000000",
    },
    buttontext: {
        color: "white",
    },
    gridItemStyle: {
        flex: 1,
        margin: 15,
        height: 150,
    },
});

export default CategoriesScreen;

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItemStyle}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: "CategoryMeals",
                        params: {
                            categoryId: itemData.item.id,
                        },
                    });
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
        </View>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories",
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

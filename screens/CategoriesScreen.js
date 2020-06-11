import React from "react";
import { View, Text } from "react-native";

const CategoriesScreen = (props) => {
    return (
        <View>
            <Text>Categories Screen</Text>
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
});

export default CategoriesScreen;

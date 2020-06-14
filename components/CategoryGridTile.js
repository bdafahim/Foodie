import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity style={styles.gridItemStyle} onPress={props.onSlect}>
            <View
                style={{
                    ...styles.containerStyle,
                    ...{ backgroundColor: props.color },
                }}
            >
                <Text style={styles.titleStyle} numberOfLines={2}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItemStyle: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    containerStyle: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 15,
    },
    titleStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        textAlign: "right",
    },
});

export default CategoryGridTile;

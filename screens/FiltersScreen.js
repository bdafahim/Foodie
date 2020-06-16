import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FilterScreen = (props) => {
    return (
        <View>
            <Text>FilterScreen</Text>
        </View>
    );
};

FilterScreen.navigationOptions = (navdata) => {
    return {
        headerTitle: "Filter Meals",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navdata.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({});

export default FilterScreen;

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Categories, Meals } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealScreen = props => {
    const key = props.navigation.getParam('key');
    const displayMeals = Meals.filter(meal => meal.categoryIds.indexOf(key) >= 0);
    const renderMeals = itemData => {
        return <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate({routeName: 'Detail', params: {
                    key: itemData.item.id
                }})
            }}
        />;
    };
    return (<View style={styles.screen}>
        <FlatList data={displayMeals} renderItem={renderMeals} />
    </View>);

};

MealScreen.navigationOptions = navigationData => {
    const key = navigationData.navigation.getParam('key');
    const chosenMeal = Categories.find(meal => meal.key === key);
    return {
        headerTitle: chosenMeal.title,
    };

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default MealScreen;
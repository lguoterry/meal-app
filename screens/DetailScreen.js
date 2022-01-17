import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Meals} from '../data/dummy-data';

const DetailScreen = props => {
    const key=props.navigation.getParam('key');
    const chosenMeal=Meals.find(meal=>meal.id===key);
    return (<View style={styles.screen}>
        <Text>
            {chosenMeal.title}
        </Text>
    </View>);

};
DetailScreen.navigationOptions = navigationData=> {
    const key= navigationData.navigation.getParam('key');
    const chosenMeal=Meals.find(meal=>meal.id===key);
    return {
        headerTitle: chosenMeal.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
});
export default DetailScreen;
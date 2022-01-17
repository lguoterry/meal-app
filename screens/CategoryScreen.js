import React from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import { Categories } from '../data/dummy-data';
import GridItem from '../components/GridItem';
const CategoryScreen = props => {
    const renderGridItem = itemData => {
        return <GridItem 
        title={itemData.item.title} 
        color={itemData.item.color}
        onPress={() => props.navigation.navigate({
            routeName: 'Meal',
            params: {
                key: itemData.item.key,
            }
        })} />;
    };

    return (
        <FlatList
            numColumns={2}
            renderItem={renderGridItem}
            data={Categories}
        />
    );
};
CategoryScreen.navigationOptions = {
    headerTitle: 'Categories',
    headerTintColor: '#4a148c',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default CategoryScreen;
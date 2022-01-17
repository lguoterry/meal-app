import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const GridItem = props => {
    return (
        <TouchableOpacity
            style={styles.gridItem} onPress={props.onPress}>
            <View style={{ ...styles.container, backgroundColor: props.color }}>
                <Text style={styles.text } numberOfLines={2}> {props.title}
                </Text>
            </View>
        </TouchableOpacity>);
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 5,
        shadowColor: '#4a148c',
        shadowOpacity: 0.24,
        shadowOffset: {
            height: 0,
            width: 2,
        },
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    text: {
        fontFamily: 'sans',
    }
});

export default GridItem;
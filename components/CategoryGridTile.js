/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, TouchableOpacity,Platform, StyleSheet, TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = (props) => {
        let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
        <TouchableCmp
            onPress={props.onSelect}
            style={{ flex: 1}}
        >
          <View style={{...styles.container, ...{backgroundColor: props.color}}}>
            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
          </View>
        </TouchableCmp>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
    }, 
    container: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: 'black',
        elevation: 3,
        padding: 15
    },
    title:{
        fontSize: 22, 
        textAlign: 'right'
    }
})

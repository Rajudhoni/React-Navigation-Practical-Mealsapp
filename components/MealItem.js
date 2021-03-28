import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <Text>{props.title}</Text>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}} >
                <Text>{props.duration}m</Text>
                <Text>{props.complexity}</Text>
                <Text>{props.afforability}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: "#ccc"
    },
    mealRow:{
        flexDirection: 'row'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail:{
       paddingHorizontal: 10,
       justifyContent: 'space-between'
    },

})

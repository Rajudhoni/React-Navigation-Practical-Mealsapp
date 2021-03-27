/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';


const MealDetailScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detial Screen !!</Text>
            <Button title="Go Back" onPress={()=> { props.navigation.popToTop()}} />
        </View>
    )
};


export default MealDetailScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
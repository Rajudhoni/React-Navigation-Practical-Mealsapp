
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    //Reading Params Upon Navigation
    const catId = props.route.params.categoryId;
  
    console.log("CategoryID:", catId);
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return(
        <View style={styles.screen}>
            <Text>Category Meals Screen !</Text>
            <Text>{selectedCategory.title}</Text>
            <Button
                    title="Go to Meal Detail Screen"
                    onPress={() => props.navigation.navigate('MealDetailScreen')}
                />
        </View>
    )
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
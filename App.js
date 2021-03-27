/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { View, Text, Platform } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import Colors from './constants/Colors';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesScreen" 
                    component={CategoriesScreen}   
                    options={{ 
                      title: 'Meals Categories',
                      ...headerStyle
             
                    }}  
        />
      
        
        <Stack.Screen name="CategoryMealsScreen" component={CategoryMealsScreen} />
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
      </Stack.Navigator>

      </NavigationContainer>
  );
}

const headerStyle = {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' 
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor ,
      headerTitleStyle: {
        fontWeight: 'bold',
        
      },
}
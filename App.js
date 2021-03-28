import 'react-native-gesture-handler';
import { View, Text, Platform } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import Colors from './constants/Colors';
import { enableScreens } from 'react-native-screens';


const Stack = createStackNavigator();


export default function App() {
  enableScreens();
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
      
        {/* setting dynamic navigation header title using params */}
        <Stack.Screen name="CategoryMealsScreen" component={CategoryMealsScreen}
                       options={({ route }) => ({ title: route.params.title, ...headerStyle })} 
        /> 
            
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} options={{title: 'Meal Detail', ...headerStyle}}  />
      </Stack.Navigator>

      </NavigationContainer>
  );
}

const headerStyle = {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'white' :  Colors.primaryColor
      },
      headerTintColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' ,
      headerTitleStyle: {
        fontWeight: 'bold',
        
      },
}
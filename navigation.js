import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import Cartscreen from './screens/Cartscreen';
import Orderpreparing from './screens/Orderpreparing';

import Registerscreen from './screens/Registerscreen';


const Stack = createStackNavigator();
export default function navigation() {
  return (
   <NavigationContainer>
    <Stack.Navigator
   initialRouteName='Home'
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Register"  component={Registerscreen}/> 
        <Stack.Screen name="Home"  component={HomeScreen}/>
        <Stack.Screen name="Restaurant"  component={RestaurantScreen}/>
        <Stack.Screen name="Cart"  options={{presentation:'modal'}} component={Cartscreen}/>
        <Stack.Screen name="Orderprepare"  options={{presentation:'fullScreenModal'}} component={Orderpreparing}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}
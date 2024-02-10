import { View, Text ,Image} from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import HomeScreen from './HomeScreen';


export default function Orderpreparing() {
    const navigation=useNavigation();
   useEffect(() => {
     setTimeout(()=>{
      navigation.navigate("Home")
     },3000)

   }, [])
   
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80"/>
      <Text className="font-bold text-center text-gray-950 text-lg">Order Placed!</Text>
    </View>
  )
}
import { View, Text,Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import {useNavigation} from '@react-navigation/native';
import { featured } from '../constants/index';
import Orderpreparing from './Orderpreparing';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantslice';
import { selectcarttotal ,selectcartitems} from '../slices/cartslice';
import RazorpayCheckout from 'react-native-razorpay';

export default function Cartscreen() {
   
    const restaurant=useSelector(selectRestaurant);
    const cartTotal=useSelector(selectcarttotal);
    
    const navigation=useNavigation();
  return (
    <View className="bg-white flex-1"> 
   
    <View className="relative py-4 shadow-sm">
       <Pressable
       onPress={()=>navigation.pop(1)}
        className="absolute z-10 rounded-full shadow top-5 left-2 " >
            <Icon.ArrowLeft strokeWidth={3} stroke="red"/>
      </Pressable>
        <View >
            <Text className="text-center font-bold text-xl"> Your Cart</Text>
            <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
    </View>
    {/* delivery time */}
    <View style={{backgroundColor:themeColors.bgColor(1)}}
    className="flex-row px-4 items-center hover:bg-white"
    >
        <Image source={require('../assets/images/bikeGuy.png')} classNass="rounded-full"
        style={{width:60,height:60}}
        />
        <Text className="flex-1 pl-4">delivery in 20-30 minutes</Text>
        <TouchableOpacity>
            <Text className="font-bold" style={{color:themeColors.bgColor(1)}}>Change</Text>
        </TouchableOpacity>
    </View>
    {/*Dishes*/}
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
        paddingBottom:50
    }}
     className="bg-white pt-5"
    >
    {
        restaurant.dishes.map((dish,index)=>{
            .6
            
            return(
                <View key={index}
                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-full"
                >
                    <Text className="font-bold " style={{color:themeColors.bgColor(1)}}>*</Text>
                    <Image className="h-14 w-14 rounded-full"
                    source={dish.image}
                    />
                    <Text className="flex-1 font-bold text-gray-700"> {dish.name}</Text>
                    <Text className="font-semibold text-base">{dish.price} </Text>
                    <TouchableOpacity
                    className="p-1 rounded-full"
                    style={{backgroundColor:themeColors.bgColor(1)}}
                    >
                   <Icon.Minus stroke="white" strokeWidth={2} height={20} width={20}  />
                    </TouchableOpacity>
                </View>
            )
        })
    }
    </ScrollView>
    {/*total*/}
    <View 
    style={{backgroundColor:themeColors.bgColor(1)}}
    className="p-6 px-8 rounded-t-3xl space-y-3">
        <View className="flex-row justify-between">
            <Text className="text-gray-700">Subtotal</Text>
            <Text className="text-gray-700"> ${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700">Delivery Fee</Text>
            <Text className="text-gray-700"> $2</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Order Total</Text>
            <Text className="text-gray-700 font-extrabold"> ${cartTotal+2}</Text>
        </View>
        <View>
            <TouchableOpacity
                   onPress={()=>navigation.navigate('Orderprepare')}
               style={{backgroundColor:themeColors.bgColor(1) ,borderColor:'black'}}
              
              className="p-3 rounded-full"
            >
                <Text className="text-white text-center font-bold text-lg">Place Order</Text>
            </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}
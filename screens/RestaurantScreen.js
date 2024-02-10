import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import {useRoute} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';
import Dishrow from '../components/Dishrow';
import Carticon from '../components/carticon';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantslice';

export default function RestaurantScreen() {
  {/* params and useRoute is used to fetch the data on next screen*/}
  const {params} =useRoute();
  let item=params;
  const navigation=useNavigation();
  const dispatch=useDispatch();

  useEffect(() => {
   if(item&&item.id){
    dispatch(setRestaurant({...item}));
   }
  }, [])
  
  return (
    <View>
      <Carticon />
      <StatusBar style="light"/>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View className="relative">
        <Image
        className="w-full h-72" source={item.image}
        />
        <TouchableOpacity
         onPress={()=>navigation.pop(1)}
        className="absolute top-14 left-4 bg-gray-50 rounded-full shadow"           
        >
         <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />  
          </TouchableOpacity>
        </View>
        <View style={{borderTopRightRadius:40,borderTopleftRadius:40}}
        className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
            <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
            <Text className="text-xs"> </Text>
            <Text className="text-green-700">{item.stars}</Text>
            <Text className="text-gray-700 font-bold">review-{item.reviews}</Text>
            <Text className="font-semibold">{item.type}</Text>
            <Text className="font-semibold">{item.category} </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width="15" height="15"/>
            <Text className="text-gray-700 text-xs">Nearby~{item.address}</Text>
          </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/*menu section is designed here by fetching the data from the array*/}
          {
             item.dishes.map((dish,index)=>
             <Dishrow
             item={{...dish}}
             key={index}
             />
             
             )
          }

        </View>
      </ScrollView>
    </View>
  )
}
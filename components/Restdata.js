import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as Icon from "react-native-feather";
import {useNavigation} from '@react-navigation/native'
import RestaurantScreen from '../screens/RestaurantScreen';

export default function Restdata({item}) {
  {/**item is variable for restaurant in index  */}
  const navigation=useNavigation();
   {/*this ...item will pass data to next restaurant screen*/}
  
  return (
    < TouchableWithoutFeedback
    onPress={()=>navigation.navigate('Restaurant',{...item})}
    >
    <View className="mr-6 bg-white rounded-3xl shadow-lg">
      <Image className="h-36 w-64 rounded-3xl"
      source={item.image}
      />
      <View className="px-3 pb-4 space-y-2">   
          <Text className="text-lg font-bold pt-2" >{item.name}</Text>
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
    </View>
    </TouchableWithoutFeedback>
   
  )
}
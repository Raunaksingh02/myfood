import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { themeColors } from '../theme'
import {useNavigation} from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectcartitems, selectcarttotal } from '../slices/cartslice'

export default function Carticon() {
    const navigation=useNavigation();
    const cartItem=useSelector(selectcartitems);
    const cartTotal=useSelector(selectcarttotal);
    

  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity
        onPress={()=>navigation.navigate('Cart')}
        style={{backgroundColor:themeColors.bgColor(1)}}
        className="flex-row justify-center mx-5 rounded-full p-4 py-3 shadow-lg"
        >
            <View className="p-2 px-4 rounded-full " style={{backgroundColor:'rgba(255,255,225,0.3'}}>
              <Text className="font-extrabold text-white text-lg">{cartItem}</Text>  
            </View>
           <Text className="flex-1 text-center font-extrabold text-white text-lg">
            view cart
           </Text>
           <Text className="font-extrabold text-white text-lg">
            ${cartTotal}
           </Text>
        </TouchableOpacity>
    </View>
  )
}
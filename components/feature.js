import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { themeColors } from '../theme'
import Restdata from './Restdata';

export default function Feature({title,description,restaurants}) {
  {/*passing the data of feaured from index in constant*/}
  return (
  
       <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title} </Text>
          <Text className="text-gray-500 text-xs">{description} </Text>
        </View>
           <TouchableOpacity>
            <Text style={{color:themeColors.text}} className="font-semibold">See All</Text>
           </TouchableOpacity>
      </View>
      {/*we are mapping the restuarant over here because they are in form of array in constant(index) */}
      <ScrollView
      horizontal
      contentContainerStyle={ {
        paddingHorizontal:15
      } }
      className="overflow-visible py-5"
      >
      {
    restaurants.map((restaurant,index)=>{
      return(
        
          <Restdata
          item={restaurant}
          key={index}
          />
      )
    })
      }
      </ScrollView>
    </View>
  )
}
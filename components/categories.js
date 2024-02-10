import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'
import { categories } from '../constants'
import { Button } from 'react-native'


export default function Categories() {

 
  return (
    <View className="mt-4">
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={{
       paddingHorizontal:15
      }
      }
    >
      {
        categories.map((category,index)=>{
            return(
              <View key={index} className="flex justify-center items-center mr-6">
                <TouchableOpacity
                className="hover:bg-yellow-600 p-1 rounded-full bg-gray-200">
                  <Image style={{height:45,width:45}}
                  source={category.image}
                  />
                </TouchableOpacity>
                <Text className="text-sm">{category.name}</Text>
              </View>
            )
        })
      }
    </ScrollView>
    </View>
  )
}
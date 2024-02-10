import { View, Text, StatusBar,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import Feature from '../components/feature';


import { featured } from '../constants';
import { useState } from 'react';

export default function HomeScreen() {
 
   const [search, setsearch] = useState("");

  return (
   <SafeAreaView className="bg-white">
    <StatusBar barStyle="dark-content"/>
    {/* searchbar */}
    <View className="flex-row items-center space-x-2 px-4 pb-2">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        <Icon.Search  height="25" width="25" stroke="gray"/>
        <TextInput placeholder='Restaurant' className="ml-2"
         style={{
          color: "gray",
          marginVertical: 10,
          
          fontSize: search ? 30 : 16,
        }}
        value={search}
        onChangeText={(Text)=>setsearch(Text)}
        
        />
        <View className="flex-row items-center space-x-1 border-1-2 pl-2 border-l-gray-300">
          <Icon.MapPin height="20" width="20" stroke="gray"/>
          <Text className="text-gray-600 ">New Delhi</Text>
        </View>
      </View>
      <View style={{backgroundColor:themeColors.bgColor(1)}} className="p-3 bg-gray-300 rounded-full">
        <Icon.Search height="20" width="20" strokeWidth={2.5} stroke="white" />
      </View>
    </View>

   {/*main content */}
   <ScrollView showsVerticalScrollIndicator={false}
    contentContainerStyle={{
     paddingBottom:20
    }}
    >
      {/*categories*/}
      <Categories/>
     </ScrollView>
     <ScrollView>
     {/*featured*/}
     <View className="mt-5">
      {
        [featured,featured,featured].map((item,index)=>{
          return(
         
             <Feature
            key={index}
            title={item.title}
            restaurants={item.restaurants}
            description={item.description}
            />
          )
        }
        )
      }

     </View>

    </ScrollView>
   </SafeAreaView>
  
  )
};
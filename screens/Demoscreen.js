import { StyleSheet, Text, View,TextInput ,FlatList} from 'react-native'
import React,{useState} from 'react'
import * as Icon from "react-native-feather";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Loginscreen from './Loginscreen';


export default function Demoscreen() {
    const navigation=useNavigation();
    const [SearchText,setSearchText]=useState('');
    const [Data,setData]=useState([]);
    const searchNews=async(text)=>{
        setSearchText(text)
        const response=await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=6d8a08c5a69a4ce9b45995924d6e4f59&q=${text}')
        const data= await response.json();
        setData(data.articles);
    }
  return (
    <View className="flex-row items-center mt-4">
    <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
      <Icon.ArrowLeft height="30" width="30" strokeWidth={2.5} stroke="Black"/>
      </TouchableOpacity>
    </View>
    <View className="ml-4">
    <TextInput
    value={SearchText}
    onChangeText={(text)=>{
        searchNews(text)
    }}
    style={{height:30,width:350}}
    className="text-sm font-bold"
     placeholder='search now'/>
    </View>
    <View className="mb-16">
    <FlatList
    showsVerticalScrollIndicator={false}
    data={Data}
    renderItem={(item,index)=>{
      return(
        <Card item={item}  />
      )
    }}
    />

    </View>
    </View>
  )
}

const styles = StyleSheet.create({})
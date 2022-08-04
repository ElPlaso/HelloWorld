import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Platform, Alert, StyleSheet, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Text, View, SafeAreaView, Image, Button } from 'react-native';
import MathText from 'react-native-math';

export default function App() {
  console.log('App executed')
  const [bgCol, setBgCol] = useState("gold")
  const [imageSrc, setImageSrc] = useState("https://unsplash.it/150/200")
  const getRandomImage =()=>{
    var randNum = Math.floor(Math.random() * 100) + 1 ;
    return "https://unsplash.it/150/200?image=" + randNum;
  }

  //const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={
      {
        flex: 1,
        backgroundColor: bgCol,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }>
      <Text numberOfLines={1} >Random Image Generator</Text>
      <Image
        source={
          {
            width: 200,
            height: 300,
            uri: imageSrc
          }
        }
      />
      <Button 
        color="orange"
        title='Randomise' onPress={() => setImageSrc(getRandomImage)}
      />
      <View 
        style={
          {
            //backgroundColor: '#fff',
            flexDirection: "row",
            padding: 10,
            justifyContent: 'space-between',
          }
          
        }
      >
        <TouchableNativeFeedback onPress={() => setBgCol('dodgerblue')}>
          <View 
            style={
              {
                backgroundColor: "dodgerblue",
                width: 100,
                height: 100,
                borderWidth: 2,
                borderColor: "#0",
              }
            }
          />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => setBgCol('gold')}>
          <View 
            style={
              {
                backgroundColor: "gold",
                width: 100,
                height: 100,
                borderWidth: 2,
                borderColor: "#0",
              }
            }
          />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => setBgCol('tomato')}>
          <View 
            style={
              {
                backgroundColor: "tomato",
                width: 100,
                height: 100,
                borderWidth: 2,
                borderColor: "#0",
              }
            }
          />
        </TouchableNativeFeedback>
        
      </View>
    </SafeAreaView>
  );
}

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Platform, Alert, StyleSheet, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Text, View, SafeAreaView, Image, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log('App executed')
  const [bgCol, setBgCol] = useState("gold")
  const getRandomImage =()=>{
    var randNum = Math.floor(Math.random() * 100) + 1 ;
    return "https://unsplash.it/150/200?image=" + randNum;
  }
  const [imageSrc, setImageSrc] = useState(getRandomImage)
  

  const {landscape} = useDeviceOrientation();
  const {height} = Dimensions.get('window');
  console.log(height)

  return (
    <SafeAreaView style={
      {
        flex: 1,
        backgroundColor: bgCol,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }
    }>
      <Text numberOfLines={1} >Random Image Generator</Text>
      <Image
        source={
          {
            width: height * 0.3,
            height: height * 0.3 * 1.5,
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
            justifyContent: 'space-around',
          }
          
        }
      >
        <TouchableNativeFeedback onPress={() => setBgCol('dodgerblue')}>
          <View 
            style={
              {
                backgroundColor: "dodgerblue",
                width: height*0.3*0.5,
                height: height*0.3*0.5,
                borderWidth: 1,
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
                width: height*0.3*0.5,
                height: height*0.3*0.5,
                borderWidth: 1,
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
                width: height*0.3*0.5,
                height: height*0.3*0.5,
                borderWidth: 1,
                borderColor: "#0",
              }
            }
          />
        </TouchableNativeFeedback>
        
      </View>
    </SafeAreaView>
  );
}

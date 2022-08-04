import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Platform, Alert, StyleSheet, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Text, View, SafeAreaView, Image, Button } from 'react-native';
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  //console.log('App executed')
  const [bgCol, setBgCol] = useState("gold")
  const [imageUri, setImageUri] = useState("https://picsum.photos/200/300")

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
      <TouchableNativeFeedback onPress={() => console.log('touched')}>
        <Image
          source={
            {
              width: 200,
              height: 300,
              uri: imageUri
            }
          }
        />
      </TouchableNativeFeedback>
      <Button 
        color="orange"
        title='Randomise' onPress={() => setImageUri("https://picsum.photos/200/300")}
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
        <View 
          style={
            {
              backgroundColor: "gold",
              width: 100,
              height: 100,
              borderWidth: 2,
              borderColor: "#0",
              padding: 4,
            }
          }
        />
        <View 
          style={
            {
              backgroundColor: "tomato",
              width: 100,
              height: 100,
              outlineWidth: 100,
              borderWidth: 2,
              borderColor: "#0",
              padding: 4,
            }
          }
        />
      </View>
    </SafeAreaView>
  );
}

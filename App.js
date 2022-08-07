import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, Dimensions, Platform, StyleSheet, TouchableNativeFeedback, Text, View, SafeAreaView, Image, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log('App executed')
  const [bgCol, setBgCol] = useState("gold")
  const getRandomImage =()=>{
    var randNum = Math.floor(Math.random() * 100) + 1 ;
    return "https://unsplash.it/150/200?image=" + randNum;
  }
  const [imageSrc, setImageSrc] = useState(getRandomImage)
  const {height} = Dimensions.get('window')

  const getRandomQuote = async () =>
  {
      //api for quotes
      var url="https://type.fit/api/quotes";    

      // fetch the data from api
      const response = await fetch(url);
      console.log(typeof response);
      //convert response to json and store it in quotes array
      const allQuotes = await response.json();

      // Generates a random number between 0 and the length of the quotes array
      const indx = Math.floor(Math.random()*allQuotes.length);

      const quote = allQuotes[indx]['text'];
      //console.log(quote);
      //Store the quote present at the randomly generated index
      //const quote=allQuotes[indx].text;]

      return quote
  }

  console.log(String(getRandomQuote()));
  const [randQuote, setQuote] = useState(String(getRandomQuote()))

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
      <Text numberOfLines={1} style={styles.Text}>Random Image Generator</Text>
      <View>
        <ImageBackground
          style={
            {width: 0.5*height, height: 0.5*height,} }
          source={{
            uri: imageSrc,}}
          >
            <View style={styles.textView}>
              <Text style={styles.imageText}>{randQuote}</Text>
            </View>
        </ImageBackground>
      </View>
      <Button 
        color="orange"
        title='New Image' onPress={() => setImageSrc(getRandomImage)}
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

const styles = StyleSheet.create({
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
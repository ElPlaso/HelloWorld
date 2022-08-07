import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, Dimensions, Platform, StyleSheet, TouchableNativeFeedback, Text, View, SafeAreaView, Image, Button, ListViewBase } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log('App executed')
  const [bgCol, setBgCol] = useState("gold")
  const [textCol, setTextCol] = useState("black")
  const getRandomImage =()=>{
    var randNum = Math.floor(Math.random() * 100) + 1 ;
    return "https://unsplash.it/150/200?image=" + randNum;
  }
  const [imageSrc, setImageSrc] = useState(getRandomImage)
  const {height} = Dimensions.get('window')

  const [randQuote, setRandQuote] = useState("The World Says Hello")

  const getRandomQuote = async () =>
  {
      //api for quotes
      var url="https://type.fit/api/quotes";    

      // fetch the data from api
      const response = await fetch(url);

      //convert response to json and store it in quotes array
      const allQuotes = await response.json();

      // Generates a random number between 0 and the length of the quotes array
      const indx = Math.floor(Math.random()*allQuotes.length);

      setRandQuote(allQuotes[indx]['text'])
  }

  let changeImage = () => {
    setImageSrc(getRandomImage);
    getRandomQuote();
  }

  let changeTextCol = () => {
    if(textCol=="white"){
      setTextCol("black");
    }
    else if(textCol=="black"){
      setTextCol("white");
    }
  }

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
      <Text numberOfLines={1} style={styles.Text}>Hello World Generator</Text>
      <View>
        <ImageBackground
          style={
            {width: 2*0.5*height/3, height: 0.5*height} }
          source={{
            uri: imageSrc,}}
          >
            <View style={styles.textView}>
              <Text style={{fontSize: 15, color: textCol,}}>
                {randQuote}
              </Text>
            </View>
        </ImageBackground>
      </View>
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
        <Button 
          color="orange"
          title='New Image' onPress={() =>  setImageSrc(getRandomImage)}
        />
        <Button 
          color="orange"
          title='New Quote' onPress={() => getRandomQuote()}
        />
      </View>
      <Button 
        color="black"
        title='Text Colour' onPress={() => changeTextCol()}
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
                width: height*0.3*0.25,
                height: height*0.3*0.25,
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
                width: height*0.3*0.25,
                height: height*0.3*0.25,
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
                width: height*0.3*0.25,
                height: height*0.3*0.25,
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
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  },
  Text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
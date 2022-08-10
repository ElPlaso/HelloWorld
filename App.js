import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, Dimensions, Platform, StyleSheet, TouchableNativeFeedback, TouchableHighlight, Text, View, SafeAreaView, Button } from 'react-native';
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const {height} = Dimensions.get('window')
  const {width} = Dimensions.get('window')

  const getRandomImage = () => {
    var randNum = Math.floor(Math.random() * 1000) + 1 ;
    var img = "https://unsplash.it/500/600?image=" + randNum;
    return img;
  }

  const [imageSrc, setImageSrc] = useState(getRandomImage())
  

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

      setRandQuote(allQuotes[indx]['text']);
  }    

  const fontListAnd = ['normal', 'notoserif', 'sans-serif', 'sans-serif-light', 'sans-serif-thin', 
                       'sans-serif-condensed', 'sans-serif-medium', 'serif', 'Roboto', 'monospace'
                        ];

  const fontListIos =  ['Academy Engraved LET', 'Al Nile', 'American Typewriter', 'Apple Color Emoji', 'Arial', 
                        'Baskerville', 'Chalkboard SE', 'Damascus', 'Euphemia UCAS', 'Futura'
                       ];     

  const getRandomFont = () =>{
    let fontList = Platform.OS === "android" ? fontListAnd: fontListIos;
    const indx = Math.floor(Math.random()*fontList.length);

    return fontList[indx];
  }

  const [randFont, setRandFont] = useState(getRandomFont)

  let changeImage = () => {
    setImageSrc(getRandomImage);
    getRandomQuote();
    setRandFont(getRandomFont);
  }

  return (
    <SafeAreaView style={
      {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }
    }>
      <View>
        <Text numberOfLines={1} style={styles.Heading}>helloworld.</Text>
      </View>
      <View>
        <TouchableNativeFeedback onPress={() => changeImage()}>
          <ImageBackground
            style={
              {width: width, height: 0.7*height} }
            source={{
            uri: imageSrc,}}
            >
              <View 
                style={
                  {flex: 1, backgroundColor: "rgba(0,0,0,.5)"} 
                }
              >
                <View style={styles.textView}>
                  <Text style={{
                          fontFamily: randFont,
                          fontSize: 25, color: 'white', 
                          //backgroundColor: "rgba(0,0,0,.5)",
                          padding: 10,
                        }} 
                  >
                    {randQuote}
                  </Text>
                </View>
              </View>
          </ImageBackground>
        </TouchableNativeFeedback>
      </View>
      
        <TouchableHighlight onPress={() => changeImage()}>
          <View style={{backgroundColor: 'white',
              flexDirection: "row",
              justifyContent: 'space-around',
              position:"relative",
              borderRadius:15,
              padding:15,
              top:10,}}>
          <Text style={styles.Button}>next quote</Text>
          </View>
        </TouchableHighlight>
      
      
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
  Heading: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  Button: {
    fontSize: 20,
    color: 'black',
  },
});
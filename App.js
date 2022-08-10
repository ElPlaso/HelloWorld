import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, Dimensions, Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Text, View, SafeAreaView, Button } from 'react-native';
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const {height} = Dimensions.get('window')
  const {width} = Dimensions.get('window')

  const checkImageExists = async (imgtxt) =>
  {
    var url=imgtxt;    
    const imgResp = await fetch(url);
    
    var exists = imgResp.ok;
    console.log(exists);
    return exists;
  }

  const getRandomImage = () => {
    while(true){
      var randNum = Math.floor(Math.random() * 1000) + 1 ;
      var img = "https://unsplash.it/500/600?image=" + randNum;
      if(checkImageExists(img)){
        return img;
      }
    }
  }

  const [imageSrc, setImageSrc] = useState(getRandomImage())
  const [randQuote, setRandQuote] = useState("The World Says Hello")
  const [colMode, setColMode] = useState("dark")

  let changeColMode = () => {
    if(colMode=="dark"){
      setColMode("light");
    }
    else{
      setColMode("dark")
    }
  }

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
        backgroundColor: colMode === 'dark' ? 'black' : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }
    }>
      <View>
        <TouchableOpacity onPress={() => changeColMode()}>
          <Text numberOfLines={1} style={colMode === 'dark' ? styles.Heading : lightStyles.Heading}>helloworld.</Text>
        </TouchableOpacity>
      </View>
      <View>
        
          <ImageBackground
            style={
              {width: width, height: 0.7*height}}
            source={{
            uri: imageSrc,}}
            >
              <TouchableNativeFeedback onPress={() => changeImage()}>
              <View 
                style={
                  {
                    flex: 1, 
                    backgroundColor: colMode === 'dark' ? "rgba(0,0,0,.5)" : "rgba(255,255,255,.5)",
                  } 
                }
              >
                <View style={styles.textView}>
                  <Text style={{
                          fontFamily: randFont,
                          fontSize: 25, color: colMode === 'dark' ? 'white' : 'black', 
                          padding: 10,
                        }} 
                  >
                    {randQuote}
                  </Text>
                </View>
              </View>
              </TouchableNativeFeedback>
          </ImageBackground>
      </View>
      <View 
        style={
        {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: width,
        }}
      >
        <TouchableOpacity onPress={() => changeImage()}>
          <View style={colMode === 'dark' ? styles.Button : lightStyles.Button}>
          <Text style={colMode === 'dark' ? styles.ButtonText : lightStyles.ButtonText}>new poster</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const lightStyles = StyleSheet.create({
  Heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  ButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: 'black',
    position:'relative',
    borderRadius:15,
    padding:15,
    top:10,
  }
})

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
  ButtonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: 'white',
    position:'relative',
    borderRadius:15,
    padding:15,
    top:10,
  }
});
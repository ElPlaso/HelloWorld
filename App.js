import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Background, ImageBackground, Dimensions, Platform, StyleSheet, TouchableNativeFeedback, Text, View, SafeAreaView, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log('App executed')
  const [bgCol, setBgCol] = useState("gold")
  //const [textCol, setTextCol] = useState("black")
  const [imageExists, setImageExists] = useState(true)
  const getRandomImage =()=>{
    var randNum = Math.floor(Math.random() * 1000) + 1 ;
    var uritxt = "https://unsplash.it/150/200?image=" + randNum;
    getImageExists(uritxt);
    if(imageExists == true){
      return uritxt;
    }
    else{
      return getRandomImage;
    }
  }
  const [imageSrc, setImageSrc] = useState(getRandomImage)
  const {height} = Dimensions.get('window')

  const [randQuote, setRandQuote] = useState("The World Says Hello")

  const getImageExists = async (uritxt) => {
    var http = new XMLHttpRequest();

    http.open('HEAD', uritxt, false);
    http.send();

    setImageExists(http.status != 404);
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

      setRandQuote(allQuotes[indx]['text'])
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
    setRandFont(getRandomFont);
    getRandomQuote();
  }

  // let changeTextCol = () => {
  //   if(textCol=="white"){
  //     setTextCol("black");
  //   }
  //   else if(textCol=="black"){
  //     setTextCol("white");
  //   }
  // }

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
      <View>
        <Text numberOfLines={1} style={styles.Text}>Hello World Generator</Text>
      </View>
      <View>
        <TouchableNativeFeedback onPress={() => changeImage()}>
          <ImageBackground
            style={
              {width: 2*0.7*height/3, height: 0.7*height} }
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
      <View 
        style={
          {
            //backgroundColor: '#fff',
            flexDirection: "row",
            justifyContent: 'space-around',
          }
        }
      >
        <Button 
          color="black"
          title='New Poster' onPress={() => changeImage()}
        />
        {/* <Button 
          color="black"
          title='New Quote' onPress={() => getRandomQuote()}
        /> */}
      </View>
     
      <View 
        style={
          {
            //backgroundColor: '#fff',
            flexDirection: "row",
            padding: 10,
            justifyContent: 'space-around',
            position: 'absolute',
            bottom: 0,
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
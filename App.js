import { StatusBar } from 'expo-status-bar';
import { Dimensions, Platform, Alert, StyleSheet, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Text, View, SafeAreaView, Image, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  //console.log('App executed')

  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={containerStyle.container}>
      <Text numberOfLines={1} >Random Image Generator</Text>
      <TouchableNativeFeedback onPress={() => console.log('touched')}>
        <Image
          source={
            {
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"
            }
          }
        />
      </TouchableNativeFeedback>
      <Button 
        color="orange"
        title='Randomise' onPress={() => Alert.alert('Button Tapped', "My message", 
        [ 
          {text: "Yes"},
          {text: "No"}
        ],
        )}
      />
      <View 
        style={
          {
            //backgroundColor: '#fff',
            flexDirection: "row",
            padding: 4,
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
              padding: 4,
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

const containerStyle = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "gold",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

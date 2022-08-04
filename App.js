import { StatusBar } from 'expo-status-bar';
import { Dimensions, Platform, Alert, StyleSheet, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Text, View, SafeAreaView, Image, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  //console.log('App executed')

  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={containerStyle.container}>
      <Text numberOfLines={3} >MarketApp</Text>
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
        title='Click Me' onPress={() => Alert.alert('Button Tapped', "My message", 
        [ 
          {text: "Yes"},
          {text: "No"}
        ]
        )}
      />
      <View 
        style={
          {
            backgroundColor: 'dodgerblue',
            width: '50%',
            height: landscape ? '100%' : '30%',
          }
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "orange",
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

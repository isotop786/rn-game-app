import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import {Home,About,ReviewDetails} from './screens/'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

const getFonts = ()=>{
  return Font.loadAsync({
    'nonito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nonito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}


export default function App() {

  // const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loaded] = useFonts({
    'nonito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nonito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })

  if(loaded)
  {
    return (
      // <Home/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
         
        </Stack.Navigator>
      </NavigationContainer>
    
    );
  }
  else{
   return null
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

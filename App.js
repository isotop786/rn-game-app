import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import {Home,About,ReviewDetails} from './screens/'
import * as Font from 'expo-font';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
// import AppLoading from 'expo-app-loading';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const Drawer = createDrawerNavigator();

const getFonts = ()=>{
  return Font.loadAsync({
    'nonito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nonito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

function Root() {
  return (
    <Drawer.Navigator
    useLegacyImplementation
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home}  />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
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
      <>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Root"
          // screenOptions={{
          //   headerStyle:{
          //     // backgroundColor:'#f4511e'
          //     // backgroundColor:'#999
          //   },
          //   headerBackground:()=>(
          //     <Image
          //       style={StyleSheet.absoluteFill}
          //       // source={require('./assets/img/headerBG1.jpg')}
          //       source={{
          //         uri:'https://cdn.pixabay.com/photo/2015/12/01/08/44/banner-1071797_1280.jpg'
          //       }}
          //     />
          //   ),
          //   headerTintColor:'#333',
          //   headerTitleStyle:{
          //     fontWeight:'bold',
          //   },
          // }}
        >
          <Stack.Screen
           name="Root" 
           component={Root}
           options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={Home}
          options={{
          title:'GameZone',
          // headerBackground: ()=>(
          //   <Image
          //   style={StyleSheet.absoluteFill}
          //   source={ require('./assets/img/headerBG1.jpg')}
          //   // source={{
          //   //   uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' 
          //   // }}
          //   />
          // ),
          // headerTitleStyle:{color:'#fff'}
        }}
          />
          {/* <Stack.Screen name="About" component={About} /> */}
          <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
          
        </Stack.Navigator>
       
      </NavigationContainer>

      {/* <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
          useLegacyImplementation
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
        </NavigationContainer> */}
      </>
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

import React,{useEffect} from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Routes component
import HlavniStranka from "./screens/HlavniStranka";
import Indikace from "./screens/Indikace";
import LekovyProfil from "./screens/LekovyProfil";
import Davkovani from "./screens/Davkovani";
import Baleni from "./screens/Baleni";
import SPC from "./screens/Spc";
import { Image } from "react-native"
import { Asset } from 'expo-asset';
const Drawer = createDrawerNavigator();
const App = () => {


  useEffect(() => {
    let process: boolean = true;
    cacheImages([
      require('./assets/adaptive-icon.png'),
require('./assets/davkovani.png'),
require('./assets/fiinal_icon.png'),
require('./assets/final_table.png'),
require('./assets/gordius-spc.pdf'),
require('./assets/gordius_cenik.jpg'),
require('./assets/gordius_cenik_final.jpg'),
require('./assets/hearts_final_jarda.png'),
require('./assets/hlavni.png'),
require('./assets/icon.png'),
require('./assets/jezek.jpg'),
require('./assets/krabicka_logo.jpg'),
require('./assets/krabicka_logo2.png'),
require('./assets/mark.png'),
require('./assets/marka.png'),
require('./assets/pngaaa.com-318875.png'),
require('./assets/splash.png'),
require('./assets/toprightlogo.jpg'),
    ]);
    return () => {
      process = false;
    }
  }, [])
  function cacheImages(images: string[]) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='HlavniStranka' screenOptions={{
  headerShown:false
    }}>
        <Drawer.Screen name='HlavniStranka' component={HlavniStranka} />
        <Drawer.Screen name='Indikace' component={Indikace} />
        <Drawer.Screen name='LekovyProfil' component={LekovyProfil} />
        <Drawer.Screen name='Davkovani' component={Davkovani} />
        <Drawer.Screen name='Baleni' component={Baleni} />
        <Drawer.Screen name='Spc' component={SPC} />
      </Drawer.Navigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
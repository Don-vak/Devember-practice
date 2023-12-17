import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import DayListItem from './src/component/core/DayListItem';
import { useFonts, Inter_900Black, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen'; 
import { useEffect } from 'react';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'

SplashScreen.preventAutoHideAsync

const days = [...Array(24)].map ((val, index)=> index + 1);

export default function App() {
  const [fontsLoaded , fontError] = useFonts({
    Inter: Inter_700Bold,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  })


  useEffect (()=>{

    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }; 
  }, [fontsLoaded, fontError])

  
  if (!fontsLoaded && !fontError) {
    SplashScreen.hideAsync();
  }; 

  
  return (

    <View style={styles.container}>

      <FlatList 
      data={days}
      numColumns={2}
      columnWrapperStyle = {styles.column}
      contentContainerStyle = {styles.content}
      renderItem={({item})=><DayListItem day = {item}/>
      } />

      <StatusBar style="auto" />
    </View>
  );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    gap: 15,
    padding:20
  },

  column: {
    gap:10
  },
 
});

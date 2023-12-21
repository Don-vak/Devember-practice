
import { Stack } from "expo-router"
import { useFonts, Inter_900Black, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen'; 
import { useEffect } from 'react';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'


SplashScreen.preventAutoHideAsync

export default function RootLayout (){ 

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
        <Stack screenOptions={{ 
        headerStyle:{backgroundColor:'white'}}}>
         <Stack.Screen name="index" options={{title: 'Devember'}}/>
        </Stack>
    )
   
}
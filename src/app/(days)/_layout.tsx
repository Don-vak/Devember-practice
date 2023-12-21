
import { Stack } from "expo-router"


export default function RootLayout (){ 
    return (
        <Stack screenOptions={{ 
        headerStyle:{backgroundColor:'white'}}}>
         <Stack.Screen name="index" options={{title: 'Devember'}}/>
        </Stack>
    )
   
}
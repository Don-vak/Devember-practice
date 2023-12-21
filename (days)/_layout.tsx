import * as React from 'react';
import { Stack } from "expo-router"

export default function RootLayout (){ 
    return <Stack screenOptions={{title: 'Devember', headerStyle:{backgroundColor:'red'}}}/>
}
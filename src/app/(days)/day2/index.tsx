import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const index = () => {
  return (
    <View>
     <Stack.Screen options={{title:'Second day'}}/>
      <Text style = {{fontFamily:'AmaticBold', fontSize:100}}>day two code</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type DayListItem = {
    day : number;
}

export default function DayListItem({day} : DayListItem) {
  return (
    <Link href={` /day${day}`} asChild>
     <Pressable style = {styles.box}>
        <Text style= {styles.text}>{day}</Text> 
     </Pressable>
    </Link>
    
  )
}

const styles = StyleSheet.create({ 
    
      box :{
        backgroundColor : '#F9EDE3',
        flex: 1,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#9b4521',
        borderRadius: 25,
       
    
        
      },
      
      text: {
        color:'#9b4521',
        fontSize: 70,
        fontFamily: 'Amatic'
      },
})
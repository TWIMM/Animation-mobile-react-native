import { View,SafeAreaView, Text, Image, ScrollView } from 'react-native'
import React , {useEffect, useState} from 'react'
import Datetoday from './date';
import Logo1 from '../Image/baselogtwo.png'


export default function Schedule() {
    
  return (
    <SafeAreaView 
    >
      <View
         style={{
            padding:30, 
            display:'flex', 
            flexDirection:'row'
          }}
      >
          <View style={{
            display:'flex', 
            flexDirection:'column'
          }}>
              <View>
                   <Datetoday/>
              </View>
               <View>
               <Text style={{
                  fontFamily:'Gill Sans',
                  fontSize:50 ,  
                  color:'rgb(114,0,0)'
               }}>
                   Schedule
               </Text>
              </View>
          </View>
           <View style={{
            marginLeft:'auto',
            width:'25%',
            alignContent:'center', 
            alignItems:'center',
            borderRadius:10,
            backgroundColor:'#ff5d5c',
           }}>
              <Image source={Logo1}/>
          </View>
      </View>
       <View>
        
       </View>
      
    </SafeAreaView>
  )
}
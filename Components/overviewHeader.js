import {TouchableOpacity, View,SafeAreaView, Text , useWindowDimensions , Image} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import LogoOne from '../Image/baselog.png';
import { useNavigation } from '@react-navigation/native';

export default function Overviewheader() {
    const {width, height} = useWindowDimensions();
    const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{display:'flex', flexDirection:'row' }}
    >
        <View style={{
            
            padding:25,
            display:'flex', 
            flexDirection:'column'
        }}>
            <TouchableOpacity
               onPress={()=>{
                navigation.navigate('Homepage')
               }}
            >
               <Ionicons name="arrow-back" size={30} color="rgb(114,0,0)" />
            </TouchableOpacity>

            <View
             style={{
                marginTop:50,
                display:'flex', 
                flexDirection:'row',
                justifyContent:'center' , 
                alignContent:'center', 
                alignItems:'center'
              }}
            >
              <TouchableOpacity
                onPress={()=>{
                  navigation.navigate('Schedule')
                }}
              >
                 <Text style={{
                    transform:[{rotate:'270deg'}],
                    fontFamily:'Gill Sans',
                    fontSize:20 ,  
                    color:'rgb(114,0,0)'
                    }}>
                      Schedule
                 </Text>
              </TouchableOpacity>
            </View>

            
            <View
             style={{
                marginTop:100,
                display:'flex', 
                justifyContent:'center' , 
                alignContent:'center', 
                alignItems:'center'
              }}
            >
              <TouchableOpacity
              >
                 <Text style={{
                    transform:[{rotate:'270deg'}],
                    fontFamily:'Gill Sans',
                    fontSize:20 ,  
                    color:'rgb(114,0,0)'
                    }}>
                      Overview
                 </Text>
              </TouchableOpacity>
            </View>
        </View>

        <View 
          style={{
            width:'100%',
            backgroundColor:'#ff5d5c', 
            borderBottomLeftRadius:20,
            display:'flex', 
            justifyContent:'center' , 
            alignContent:'center', 
            alignItems:'center'
          }}
        >
          <Image  source={LogoOne}/>    
        </View>
    </SafeAreaView>
  )
}
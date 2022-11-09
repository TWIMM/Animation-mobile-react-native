import { View, Text , TouchableOpacity,Dimensions, useWindowDimensions } from 'react-native'
import React from 'react'

export default function SpecialityModel(props) {
  const {width, height} = useWindowDimensions(); 
  const color = ['#4ff3c2', '#ff8921', '#f80078', '#ff6937', '#9c67ff', '#aaa']; 
  const selectedColor = color[Math.floor(Math.random() * color.length)];

  return (
    <TouchableOpacity style={{
        backgroundColor:selectedColor ,
        display:'flex', 
        flexDirection:'column',
        width:width-270, 
        marginRight:20, 
        borderRadius:10 ,
        height:70

        }}>
        <View style={{
        display:'flex',
        justifyContent:'center' , 
        alignContent:'center', 
        alignItems:'center', 
        
        }}>  
         <Text style={{fontFamily:'Gill Sans',fontSize:17 , color:'white'}}> {props.Spec}</Text>
        </View>
        <View style={{
          marginTop:'auto',
          marginLeft:'auto', 
          width:width-330, 
          height:27, 
          backgroundColor:'#2b2c26',
          opacity:0.2,
          borderBottomRightRadius:9,
          borderTopLeftRadius:9,
        }}>  
        
        </View>
     
    </TouchableOpacity>
  )
}
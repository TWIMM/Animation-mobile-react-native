import { View, Text , useWindowDimensions} from 'react-native'
import React from 'react'

export default function Overviewcontent() {
    const color = ['#4ff3c2', '#ff8921', '#f80078', '#ff6937', '#9c67ff', '#aaa']; 
    const selectedColorOne = color[Math.floor(Math.random() * color.length)];
    const selectedColorTwo = color[Math.floor(Math.random() * color.length)];
    const selectedColorThree = color[Math.floor(Math.random() * color.length)];

    const {width, height} = useWindowDimensions(); 
  return (
    <View style={{padding:30, display:'flex', flexDirection:'column'}}>
      <View >
         <Text
          style={{
            fontFamily:'Gill Sans',
            fontSize:30 ,  
            color:'rgb(114,0,0)'
          }}
         >Dr.Alexendre</Text>
      </View>


      <View>
         <Text
            style={{
                fontFamily:'Gill Sans',
                fontSize:30 ,  
                color:'rgb(114,0,0)'
            }}
         >Chirurgien</Text>
      </View>

      <View>
         <Text
            style={{
                fontFamily:'Gill Sans',
                fontSize:20 ,  
                marginTop:20,
                color:'rgb(114,0,0)'
            }}
         >Prenez rendez vous</Text>
      </View>


      <View>
         <Text
            style={{
                fontFamily:'Gill Sans',
                fontSize:17 ,  
                marginTop:20,
                color:'rgba(114,0,0, 0.6)', 
            }}
         >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </Text>
      </View>

      <View style={{
        marginTop:80, 
        display:'flex', 
        flexDirection:'row',
        justifyContent:'space-between' , 
        alignContent:'center', 
        alignItems:'center'
      }}>
         <View style={{
              backgroundColor:selectedColorOne  ,
              width:width-280,
              height:80,
              display:'flex', 
              alignContent:'center', 
              alignItems:'center',
              borderRadius:10,
          }}>
              <Text
                style={{
                fontFamily:'Gill Sans',
                fontSize:15 ,  
                marginTop:20,
                color:'white'
               }}
               >
                 Patient
              </Text>
              <Text
                style={{
                fontFamily:'Gill Sans',
                fontSize:15 ,  
                marginTop:5,
                color:'white'
               }}
               >
                 10K
              </Text>
           
         </View>

         <View style={{
              backgroundColor:selectedColorTwo ,
              width:width-280,
              height:80,
              display:'flex', 
              alignContent:'center', 
              alignItems:'center',
              borderRadius:10,
          }}>
              <Text
                style={{
                fontFamily:'Gill Sans',
                fontSize:15 ,  
                marginTop:20,
                color:'white'
               }}
               >
                 Expérience
              </Text>
              <Text
                style={{
                fontFamily:'Gill Sans',
                fontSize:15 ,  
                marginTop:5,
                color:'white'
               }}
               >
                 10 ans
              </Text>
           
         </View>

         <View style={{
              backgroundColor:selectedColorThree ,
              width:width-280,
              height:80,
              display:'flex', 
              alignContent:'center', 
              alignItems:'center',
              borderRadius:10,
          }}>
              <Text
                style={{
                fontFamily:'Gill Sans',
                fontSize:15 ,  
                marginTop:20,
                color:'white'
               }}
               >
                 Rating 
              </Text>
              <Text
                style={{
                fontFamily:'Gill Sans',
                fontSize:15 ,  
                marginTop:5,
                color:'white'
               }}
               >
                   4.5
              </Text>
           
         </View>
      </View>

    </View>
  )
}
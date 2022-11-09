import { View, Text , useWindowDimensions , Image, TouchableOpacity} from 'react-native'
import React ,{useState, useEffect} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Bestdoc(props) {

    const color = ['rgba(79,243,194, 0.1)', 'rgba(255,137,33, 0.1)', 'rgba(248,0,120, 0.1)', 'rgba(255,105,55, 0.1)', 'rgba(156,103,255, 0.1)', 'rgba(170,170,170,0.1)']; 
    const selectedColor = color[Math.floor(Math.random() * color.length)]
    const {width, height} = useWindowDimensions();
    const [logo , setLogo] = useState(''); 

    const checkSex = ()=>{
       if(props.EachDoc.sex === 'M'){
          setLogo("face-man-profile"); 
       }else if(props.EachDoc.sex === 'F'){
          setLogo("face-woman-profile");
       }
    }; 
    
    useEffect(()=>{
        checkSex();
    })

  return (
    <View style={{
    padding:20,
    width:width-60, 
    height:80 , 
    display:'flex', 
    flexDirection:'row', 
    backgroundColor: selectedColor, 
    borderRadius:10 ,
    marginBottom:20 ,
    justifyContent:'space-between' , 
    alignContent:'center', 
    alignItems:'center', 

    }}>
        <View style={{opacity:1 , }}>
          <View style={{ }}>
              
             <MaterialCommunityIcons name={logo} size={40} color="black" />
              
          </View>
        </View>

        <View style={{display:'flex' , flexDirection:'column'}}>
           <Text style={{fontFamily:'Gill Sans',fontSize:16 , color:'rgb(114,0,0)', }}> {props.EachDoc.name} </Text>
           <Text style={{fontFamily:'Gill Sans',fontSize:15 , color:'rgb(114,0,0)', }}> {props.EachDoc.spec} </Text>
        </View>

        <TouchableOpacity style={{
         
           backgroundColor:'rgba(170,170,170, 0.2)',
           borderRadius:4,
           width:width-330, 
           height:40,
           justifyContent:'center' , 
           alignContent:'center', 
           alignItems:'center', 

        }}>
           <MaterialCommunityIcons name='message' size={30} color="black" />
        </TouchableOpacity>
    </View>
  )
}
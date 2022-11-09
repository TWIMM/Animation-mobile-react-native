import { View, Text , TouchableOpacity,Dimensions, Image, useWindowDimensions } from 'react-native'; 
import React, {useState, useEffect} from 'react'; 
import { Ionicons } from '@expo/vector-icons';
import LogoOne from '../Image/baselog.png';
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function Mydoctors() {
    const navigation = useNavigation();
    const {width, height} = useWindowDimensions();
    const [logo , setLogo] = useState()
    const FictivDoctorList = {
      numberOne:{
        id:0,
        name: 'Alexendre',
        sex: 'M',
        logo:logo,
        spec:'Chirurgien',
       }, 
       numberTwo:{
        id:1,
        name: 'Ulysse',
        sex: 'M', 
        logo:logo
       }, 
       numberThree:{
        id:2,
        name: 'Mummy',
        sex: 'F', 
        logo:logo
       },
       numberFour:{
        id:3,
        name: 'Flory',
        sex: 'F', 
        logo:logo
       },
    };
    
   


  return (
    <View style={{ paddingLeft:20, paddingRight:20 ,display:'flex', justifyContent:'center' , alignContent:'center', alignItems:'center'}}>
       <View style={{display:'flex', justifyContent:'center' , alignContent:'center', alignItems:'center'}}>
           <View style={{backgroundColor:'#ff5d5c' , width:width-60, height:200 , borderRadius:15 , display:'flex' , flexDirection:'row'}}>
            <View style={{display:'flex', flexDirection:'column'}}>
               <View style={{padding:20,}}>
                 <Text style={{fontFamily:'Gill Sans',fontSize:32 , color:'white'}}>
                     Dr.{FictivDoctorList.numberOne.name}
                 </Text>
                 <Text style={{marginTop:5,fontFamily:'Gill Sans',fontSize:20 ,  color:'white'}}>
                     {FictivDoctorList.numberOne.spec}
                 </Text>
               </View>
               <TouchableOpacity 
                onPress={()=>{
                   navigation.navigate('Overview');
                }}
                
                style={{
                backgroundColor:'rgba(255,42,41, 0.8)' , 
                width:width-280, 
                height:60 ,
                marginRight:'auto',
                position:'fixed',
                marginTop:'auto',
                borderBottomLeftRadius:16, 
                borderTopRightRadius:15,
                justifyContent:'center' , 
                alignContent:'center', 
                alignItems:'center'
                }}>
                  <Ionicons name="arrow-forward-sharp" size={30} color="white" />
               </TouchableOpacity>
              </View>
               <View style={{marginLeft:'auto'}}>
                  <Image source={LogoOne} />
               </View>
           </View>
           <View style={{
            backgroundColor:'#ff5d5c' ,
            opacity:0.4, 
            width:width-90, 
            height:7 , 
            borderBottomRightRadius:50, 
            borderBottomLeftRadius:30,
            display:'flex', 
            justifyContent:'center' , 
            alignContent:'center', 
            alignItems:'center'}}>
               <View style={{backgroundColor:'#3e0811', opacity:0.5 , width:width-110, height:7 }}>
               
               </View>
           </View>
           <View style={{backgroundColor:'#ff5d5c' ,opacity:0.1, width:width-110, height:7 , borderBottomRightRadius:50, borderBottomLeftRadius:50}}>
               
           </View>
       </View>
    </View>
  )
}
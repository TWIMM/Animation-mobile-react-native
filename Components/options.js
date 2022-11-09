import { View, Text , ScrollView , useWindowDimensions , TouchableOpacity} from 'react-native'; 
import React, {useEffect, useState} from 'react';
import SpecialityModel from './specialityModel';
import Bestdoc from './bestdoc';


const FictivDoctorList = {
    numberOne:{
      id:0,
      name: 'Flory',
      sex: 'F',
      spec:'Chirurgienne',
    }, 
    numberTwo:{
      id:1,
      name: 'Ulysse',
      sex: 'M',
      spec:'Psychologue', 
    }, 
    numberThree:{
      id:2,
      name: 'Mummy',
      sex: 'F', 
      spec:'Ophtalmologue',
    },
   
    
};
  

export default function Options() {
  const [speciality , setSpeciality] = useState(['Chirurgie','Ophtalmologie' ,'Pediatrie', 'Gynécologie', 'Tromatologie',  'Analyse','Dentiste', 'Kynésie Therapie','Psychologue', ])
  const [doc , setDoc] = useState([
    FictivDoctorList.numberOne, 
    FictivDoctorList.numberTwo, 
    FictivDoctorList.numberThree, 
   ])
  const {width, height} = useWindowDimensions();

  return (
    <View style={{ padding:30 }}>

      <View style={{display:'flex', flexDirection:'column'}}>
 
      <Text style={{fontFamily:'Gill Sans',fontSize:20 , color:'rgb(114,0,0)' , marginBottom:10 }}> Catégories </Text>
        
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              speciality.map((eachSpec)=>{
                return <View  style={{}} >
                  <SpecialityModel
                      Spec={eachSpec}
                  />
                </View>
              })
            }
          <View>
             
          </View>
        </ScrollView>
       
      </View>

       <View  style={{marginBottom:15, marginTop:15 , display:'flex', flexDirection:'row'}} >
           
              <Text style={{fontFamily:'Gill Sans' , color:'rgb(114,0,0)',fontSize:20}}> Top Rated Doctor</Text>
           

           <TouchableOpacity style={{ marginLeft:'auto', marginTop:'auto'}}> 
              <Text style={{fontFamily:'Gill Sans',fontSize:16 , color:'rgb(114,0,0)', marginLeft:'auto', marginTop:'auto'}}> More</Text>
           </TouchableOpacity>
        </View>

       <ScrollView style={{
          marginTop:20,
        }}>  
           {
              doc.map((eachDoc)=>{
                return <View  style={{}} >
                  
                  <Bestdoc
                      EachDoc={eachDoc}
                  />
                </View>
              })
            }
        </ScrollView>
    </View>
  )
}
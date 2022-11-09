import { ScrollView,View, Text, TouchableOpacity } from 'react-native'
import React , {useEffect, useState} from 'react'

export default function Week() {

    const [day, setDay] = useState(); 
    const [month , setMonth] = useState(); 
    const [year , setYear] = useState(); 
    const [dayString , setDayString] = useState();
    
    const getDate =  ()=>{
        let intDay =  new Date().getDate();
        let intDayString = new Date().getDay();
        let intMonth =  new Date().getMonth();
        let intYear = new Date().getFullYear();
        setDay(intDay); 
        setYear(intYear); 

        if(intMonth === 1){
            setMonth('Janvier'); 
        } else if(intMonth === 2){
            setMonth('Février'); 
        } else if(intMonth === 3){
            setMonth('Mars'); 
        } else if(intMonth === 4){
            setMonth('Avril'); 
        } else if(intMonth === 5){
            setMonth('Mai'); 
        } else if(intMonth === 6){
            setMonth('Juin'); 
        } else if(intMonth === 7){
            setMonth('Juillet'); 
        } else if(intMonth === 8){
            setMonth('Aout'); 
        }else if(intMonth === 9){
            setMonth('Septembre'); 
        }else if(intMonth === 10){
            setMonth('Octobre'); 
        }else if(intMonth === 11){
            setMonth('Novembre'); 
        }else if(intMonth === 12){
            setMonth('Décembre'); 
        }

    }

    const getStringDay = ()=>{
        let intDayString = new Date().getDay(); 
        if(intDayString === 0){
            setDayString('Monday')
        } else if(intDayString === 1)
    }

    useEffect(()=>{
        getDate(); 
        getStringDay();

    }, [])

  return (
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
   >
      <TouchableOpacity
         style={{width:'35%' , height:50, backgroundColor:'rgba(255,137,33, 0.1)'}}
      >
         <Text
         >
              
         </Text>
      </TouchableOpacity>

      <TouchableOpacity
      >
         <Text
         >
        
         </Text>
      </TouchableOpacity>

      <TouchableOpacity
      >
         <Text
         >
        
         </Text>
      </TouchableOpacity>


      <TouchableOpacity
      >
         <Text
         >
        
         </Text>
      </TouchableOpacity>

      <TouchableOpacity
      >
         <Text
         >
        
         </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      >
          <Text
         >
        
         </Text>
      </TouchableOpacity>

      <TouchableOpacity
      >
         <Text
         >
        
         </Text>
      </TouchableOpacity>
   </ScrollView>
  )
}
import { View, Text } from 'react-native'
import React , {useEffect, useState} from 'react'

export default function Datetoday() {

    const [day, setDay] = useState(); 
    const [month , setMonth] = useState(); 
    const [year , setYear] = useState(); 

    
    const getDate =  ()=>{
        let intDay =  new Date().getDate();
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

    useEffect(()=>{
        getDate()
    }, [])

  return (
    <View>
      <Text style={{
        fontFamily:'Gill Sans',
        fontSize:25 ,  
        color:'rgb(114,0,0)'
      }}>
        {day} {month} {year}
      </Text>
    </View>
  )
}
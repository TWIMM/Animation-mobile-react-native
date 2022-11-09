import { View, Text , StyleSheet , TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={{display:'flex' , flexDirection:'row' }}>
          <View style= {{display:'block'}}>
            <Text style={styles.title}>Doctor </Text>
            <Text style={styles.title}>Consultation</Text>
          </View>
          <TouchableOpacity style= {{marginLeft:'auto' , display:'flex', flexDirection:'column' , marginTop:10}}>
             <View style= {{width:40, borderBottom:'solid', borderBottomWidth:3 , marginBottom:10}}>
            
             </View>
             <View style= {{width:30, borderBottom:'solid', borderBottomWidth:3 , marginRight:0}}>
            
             </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        
        fontSize:35, 
        color:'rgb(114,0,0)',
        fontFamily:'Gill Sans',
    },
    container:{
        padding:25,
    }
  
})


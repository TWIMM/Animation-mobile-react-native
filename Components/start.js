import { View, Text ,TouchableOpacity , StyleSheet} from 'react-native';
import React from 'react';
import Acceuil from './acceuil';
import { useNavigation } from '@react-navigation/native';

export default function Start() {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
        <Acceuil/>
        <TouchableOpacity 
          style={styles.button_home}
          onPress={()=>{
            navigation.navigate('Homepage');
          }}
          >  
           <Text style={{marginTop:'auto', marginBottom:'auto', color:'#ff5d5c', fontWeight:'bold', fontSize:16}}>  
             Let's START
           </Text>
         </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button_home: {
    transition:'2s',
    position:'fixed', 
    bottom:0, 
    height:70,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    alignItems:'center',
    backgroundColor:'#aaa',
    display:'flex',
  },
  container: {
    flex: 1,
 
  },
})
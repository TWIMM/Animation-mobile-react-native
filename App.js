import { View, Text , StyleSheet} from 'react-native';
import React from 'react';
import Start from './Components/start';
import Homepage from './Components/homepage';
import Schedule from './Components/shedule';
import Doctoroverview from './Components/doctoroverview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 

        <Stack.Screen
          name='Start'
          component={Start}
          options={
          {
            
          headerShown:false,
          headerTitle:'',
          presentation:'',
          }
         }
      />

       <Stack.Screen
          name='Homepage'
          component={Homepage}
          options={
          {
          headerShown:false,
          presentation:'',
          }
         }
      />
       <Stack.Screen
          name='Overview'
          component={Doctoroverview}
          options={
          {
          headerShown:false,
          presentation:'',
          }
         }
      />
       <Stack.Screen
          name='Schedule'
          component={Schedule}
          options={
          {
          headerShown:false,
          presentation:'',
          }
         }
      />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
 
  },
})
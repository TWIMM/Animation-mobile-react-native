import { SafeAreaView,View, Text } from 'react-native'
import React from 'react'
import Header from './header'
import Mydoctors from './mydoctors'
import Options from './options'
export default function Homepage() {
  return (
    <SafeAreaView>
        <Header/>
        <Mydoctors/>
        <Options/>
    </SafeAreaView>
  )
}
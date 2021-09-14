import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SignUpScreen from './screens/signUp/SignUpScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Header from './components/header'
import Home from './screens/homeScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  const globalScreenOptions = {
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTitleStyle: { color: '#ffffff' },
    headerTintColor: '#ffffff',
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

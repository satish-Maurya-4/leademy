import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SignUpScreen from './screens/signUp/SignUpScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Header from './components/header'
import Home from './screens/homeScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  // const globalScreenOptions = {
  //   headerStyle: {
  //     backgroundColor: 'red',
  //   },
  //   headerTitleStyle: { color: '#ffffff' },
  //   headerTintColor: '#ffffff',
  // }
  // screenOptions={globalScreenOptions}

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: 'Leademy',
            }}
          />
          <Stack.Screen name="signUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

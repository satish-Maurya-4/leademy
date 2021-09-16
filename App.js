import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen from './screens/HomeScreen'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#102' }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator>
          <Stack.Screen
            name="Leademy"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#306',
              },
              headerTitleStyle: {
                color: '#fff',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App

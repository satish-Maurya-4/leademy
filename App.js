import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator()
const App = () => {
  const [popUp, setPopUp] = useState('hello')
  const showNav = () => {
    console.log(popUp)
  }
  return (
    <NavigationContainer>
      {/* <View style={styles.navPopUp}>
        <Text>Helllo</Text>
      </View> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={{ marginTop: 40 }}>
    //   <Header />
    // </View>
  )
}

export default App

const styles = StyleSheet.create({
  navPopUp: {
    position: 'absolute',
    top: 100,
    left: 20,
    zIndex: 100,
  },
})

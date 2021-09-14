import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient'
// import { Text } from 'react-native-elements'

import { styles } from './style'

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <LinearGradient colors={['purple', 'voilet']} /> */}
      <View style={styles.header}>
        <Text style={styles.logo}>LEADEMY</Text>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  )
}

export default Header

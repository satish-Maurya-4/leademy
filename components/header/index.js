import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './style'

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={['#306', '#102']}
          end={[0.0, 0.5]}
          style={styles.background}
        />
        <Text style={styles.logo}>LEADEMY</Text>
        <View style={styles.button}>
          <Button
            title="Sign Up"
            onPress={(navigation) => navigation.navigate('SignUp')}
            color="#c82"
          />
        </View>
      </View>
    </View>
  )
}

export default Header

import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import Nav from '../components/Nav'

const HomeScreen = ({ navigation }) => {
  const [popUp, setPopUp] = useState(false)
  // console.log(navigation.options)
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#306', '#102']} style={styles.gradient} />
      <View style={styles.header}>
        <Text style={styles.logo}>LEADEMY</Text>
        <View style={styles.headerRight}>
          <Pressable onPress={() => setPopUp(!popUp)} style={styles.icon}>
            {popUp ? (
              <FontAwesome name="close" size={24} color="#fff" />
            ) : (
              <FontAwesome5 name="bars" size={24} color="#fff" />
            )}
          </Pressable>
          <Button title="Sign Up" color="#fc7" />
        </View>
      </View>
      {popUp ? <Nav /> : null}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'relative',
  },
  logo: {
    color: '#fff',
    fontSize: 20,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  navContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    zIndex: 100,
  },
  nav: {
    width: '96%',
    height: 200,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'yellow',
  },
  navTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  navItems: {
    alignItems: 'center',
  },
})

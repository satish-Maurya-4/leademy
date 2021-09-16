import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  Pressable,
  SafeAreaProvider,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const HomeScreen = ({ navigation }) => {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState('false')
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState('false')

  navigation.setOptions({
    headerRight: () => {
      return (
        <View style={styles.headerRight}>
          <Pressable onPress={() => setIsOpenMenuModal(true)}>
            <Ionicons name="md-menu" size={40} color="#fff" />
          </Pressable>
          <Button
            title="Sign Up"
            color="#fc7"
            onPress={() => setIsOpenSignUpModal(true)}
          />
        </View>
      )
    },
  })
  return (
    <View>
      <Modal visible={isOpenMenuModal} animationType="slide">
        <Text>I'm a modal</Text>
        <Pressable
          style={styles.closeIcon}
          onPress={() => setIsOpenMenuModal(false)}
        >
          <Entypo name="cross" size={32} color="black" />
        </Pressable>
      </Modal>
      <Modal visible={isOpenSignUpModal} animationType="slide">
        <Text>I'm a sign up modal</Text>
        <Pressable
          style={styles.closeIcon}
          onPress={() => setIsOpenSignUpModal(false)}
        >
          <Entypo name="cross" size={32} color="black" />
        </Pressable>
      </Modal>
      <Text style={{ color: '#000' }}>Home</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
})

import React from 'react'
import {
  View,
  Text,
  TextInput,
  CheckBox,
  Button,
  KeyboardAvoidingView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles'

const SignUpScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <LinearGradient colors={['#f60', '#f25']} style={styles.background} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>LEADEMY</Text>
          <View style={styles.headerText}>
            <Text style={styles.title}>WELCOME TO LEADEMY</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>COME HERE OFTEN?</Text>
          <Text style={styles.inputSubTitle}>Login To Come in</Text>
          <TextInput
            style={styles.input}
            placeholder="Username or Email Address"
          />
          <TextInput style={styles.input} placeholder="Password" />
          <View style={styles.checkbox}>
            <CheckBox
              // value={isSelected}
              // onValueChange={setSelection}
              style={styles.tick}
            />
            <Text style={styles.checkboxText}>Remember me</Text>
          </View>
        </View>
        <Button title="LOG IN" />
      </View>
      <View style={{ height: 40 }} />
    </KeyboardAvoidingView>
  )
}

export default SignUpScreen

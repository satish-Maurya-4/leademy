import React from 'react'
import { View, Text, TextInput, CheckBox, Button } from 'react-native'
import { styles } from '../../components/header/style'

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>LEADEMY</Text>
          <View style={styles.headerText}>
            <Text style={styles.title}>WELCOME TO LEADEMY</Text>
            <Text>COME HERE OFTEN?</Text>
            <Text>Login To Come in</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Username or Email Address" />
          <TextInput placeholder="Password" />
          <CheckBox
            // value={isSelected}
            // onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text>Remember me</Text>
        </View>
        <Button title="LOG IN" />
      </View>
    </View>
  )
}

export default SignUpScreen

import React, { useLayoutEffect } from 'react'
import { View, Text, Button } from 'react-native'

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <Text>Menu</Text>
          <Button
            onPress={() => navigation.navigate('signUp')}
            title="Sign Up"
            color="#c82"
          />
        </View>
      ),
    })
  }, [navigation])
  return (
    <View>
      <Text>Home enjoy</Text>
    </View>
  )
}

export default Home

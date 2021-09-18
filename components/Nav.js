import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native'
import navData from '../Data/navData'

const Nav = () => {
  return (
    <View style={styles.container}>
      {navData.map(({ title, data }) => {
        return (
          <TouchableOpacity>
            <View>
              <Text>{title}</Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default Nav

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginTop: 60,
  },
  cardContainer: {},
  card: {},
  navTitle: {
    fontSize: 20,
  },
})

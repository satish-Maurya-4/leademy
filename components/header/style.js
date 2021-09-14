import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderWidth: 1,
  },
  header: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    color: '#ffffff',
    fontSize: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 80,
  },
  button: {
    // backgroundColor: '#c82',
  },
})

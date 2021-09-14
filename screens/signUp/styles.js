import { StyleSheet } from 'react-native'
import { fonts } from 'react-native-elements/dist/config'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    width: 320,
    borderWidth: 1,
    paddingTop: 20,
  },
  header: {
    borderWidth: 1,
    alignItems: 'center',
  },
  logo: {
    color: '#000',
    fontSize: 40,
    marginBottom: 20,
    color: 'white',
  },
  headerText: {
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  inputContainer: {
    padding: 10,
  },
  inputTitle: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 8,
    color: 'white',
  },
  inputSubTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#fff',
    color: 'white',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
  },
  tick: {
    color: '#fff',
  },
  checkboxText: {
    color: '#fff',
    borderColor: '#fff',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
})

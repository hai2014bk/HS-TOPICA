
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  input: {
    marginBottom: 10,
    marginLeft: 20
  },
  inputWrap: {
    width: '80%',
    height: 45,
    borderRadius: 25,
    backgroundColor: 'white',
    marginTop: 7
  },
  icon: {
    marginLeft: 20,
    marginBottom: 10,
    height:20,
    width:20
  },
  button: {
    width: 50,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dd7d2a'
  },
  textLogin: {
    fontSize: 22,
  },
  loginWith: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    color: '#303030'
  },
  forgotText: {
    marginLeft: 20,
    fontSize: 15,
    color: '#303030'
  },
  checkboxText: {
    fontWeight: '100',
    color: '#303030'
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: null,
    height: deviceHeight,
  },
  iconLogin:{
    height:60,
    width:60,
    marginLeft:15
  }
};

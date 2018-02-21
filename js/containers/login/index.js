import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { CheckBox, Icon } from 'react-native-elements'
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  View,
  Text,
  Body
} from "native-base";
import { Field, reduxForm } from "redux-form";
import styles from "./styles";

const background = require("../../../images/background.jpg");
const mail = require("../../../images/mail.png");
const lock = require("../../../images/lock.png");
const facebook = require("../../../images/facebook.png");
const twitter = require("../../../images/twitter.png");
const google = require("../../../images/google.png");


class Login extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember: false,
      alert: ''
    };
  }

  onLogin() {
    this.props.navigation.navigate("Home")
  }

  onValidate() {
    if (this.state.email == '') {
      this.setState({ alert: "Email can't be blank" })
    } else if (this.checkSpaceAll(this.state.email)) {
      this.setState({ alert: "Email can't be blank", email: '' })
    } else if (!this.emailValidation(this.state.email)) {
      this.setState({ alert: 'Email is invalid' })
    } else if (this.state.password == '') {
      this.setState({ alert: "Password can't be blank" })
    } else if (this.checkSpaceAll(this.state.password)) {
      this.setState({ alert: "Password can't be blank", password:'' })
    } else {
      this.props.navigation.navigate("Home")
    }
  }

  render() {
    return (
      <Container>
        <Content keyboardShouldPersistTaps='handled'>
          <Image resizeMode='stretch' source={background} style={styles.background} >
            <View style={{ marginTop: 200 }}></View>
            <Text style={styles.alertText}>{this.state.alert}</Text>
            <View style={styles.inputWrap}>
              <Item style={{ borderBottomWidth: 0 }}>
                <Image source={mail} style={styles.icon} resizeMode='contain' />
                <Input style={styles.input} onChangeText={(email) => this.setState({ email })} placeholder='Email address' />
              </Item>
            </View>
            <View style={styles.inputWrap}>
              <Item style={{ borderBottomWidth: 0 }}>
                <Image source={lock} style={styles.icon} resizeMode='contain' />
                <Input success onSubmitEditing={() => this.onLogin()} style={styles.input} secureTextEntry={true} onChangeText={(password) => this.setState({ password })} placeholder='Password' />
              </Item>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Item style={{ borderBottomWidth: 0, }}>
                <CheckBox
                  textStyle={styles.checkboxText}
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  onPress={() => this.setState({ remember: !this.state.remember })}
                  title='Duy trì đăng nhập'
                  checked={this.state.remember}
                />
              </Item>
              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Item style={{ borderBottomWidth: 0, }}>
                  <Text style={styles.forgotText}>Quên mật khẩu</Text>
                </Item>
              </TouchableOpacity>
            </View>
            <Button onPress={() => this.onLogin()} rounded style={styles.button}><Text style={styles.textLogin}>ĐĂNG NHẬP</Text></Button>
            <Text style={styles.loginWith}>Đăng nhập với</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity>
                <Image source={facebook} style={[styles.iconLogin]} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={twitter} style={styles.iconLogin} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={google} style={styles.iconLogin} />
              </TouchableOpacity>
            </View>
          </Image>
        </Content>
      </Container>
    );
  }

  emailValidation(email) {
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
  }
  checkSpaceAll(text) {
    if (!text.replace(/\s/g, '').length) {
      return true
    }
    return false
  }
}
const LoginSwag = reduxForm(
  {
    form: "test",
  },
  function bindActions(dispatch) {
    return {
      setUser: name => dispatch(setUser(name))
    };
  }
)(Login);
LoginSwag.navigationOptions = {
  header: null
};
export default LoginSwag;

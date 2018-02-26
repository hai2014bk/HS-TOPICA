import React, { Component } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { connect } from "react-redux";
import MainNativeSmile from "../mainNativeSmile";
import DrawBar from "../DrawBar";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import HeaderApp from '../../components/Header';
import Swiper from 'react-native-swiper'
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { openDrawer } from "./actions";
import styles from "./styles";
var list = ['https://i.imgur.com/5Dt9usR.png', 'https://i.imgur.com/5Dt9usR.png', 'https://i.imgur.com/5Dt9usR.png', 'https://i.imgur.com/5Dt9usR.png']

class Home extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func
  };

  newPage(index) {
    this.props.setIndex(index);
    Actions.AddQuestion();
  }

  renderBanner(item) {
    return (
      <View style={styles.slide}>
        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://i.imgur.com/5Dt9usR.png' }} />
      </View>
    )
  }

  render() {
    console.log(DrawNav, "786785786");
    return (
      <Container style={styles.container}>
        <HeaderApp
          iconLeft={'menu'}
          leftTouch={() => this.props.navigation.navigate("DrawBar")}
          title={'Home'}
          iconRight={'search'}
        />
        <Content>
          <View style={{paddingLeft:10, paddingRight:10}}>
            <Swiper
              style={styles.wrapper} height={240}
              activeDot={<View style={{ height: 14, width: 14, backgroundColor: '#e7a23f', borderRadius: 7, marginRight: 5 }}></View>}
              dot={<View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: '#848484', marginRight: 5 }}></View>}
              paginationStyle={{ position: 'absolute', bottom: 0 }}
            >
              {
                list.map((item) => this.renderBanner(item))
              }
            </Swiper>
          </View>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("MainNativeSmile")}
            style={{ width: 150, height: 150, backgroundColor: 'grey', margin: 20, borderRadius: 10 }}
          >
            <Text style={{ color: 'white' }}>Native smile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer())
  };
}
const mapStateToProps = state => ({
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
  {
    Home: { screen: HomeSwagger },
    MainNativeSmile: { screen: MainNativeSmile }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};
export default DrawNav;

import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Image } from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view'
var CustomTabBar = require('./TabBar');
import MyQuestion from './myQuestion'
import PopularQuestion from './popularQuestion'
import Swiper from 'react-native-swiper'
import HeaderApp from '../../components/Header';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
var list = ['https://i.imgur.com/5Dt9usR.png', 'https://i.imgur.com/5Dt9usR.png', 'https://i.imgur.com/5Dt9usR.png', 'https://i.imgur.com/5Dt9usR.png']
class MainNativeSmile extends Component {

  renderBanner(item) {
    return (
      <View style={styles.slide}>
        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://i.imgur.com/5Dt9usR.png' }} />
      </View>
    )
  }
  render() {
    return (
      <Container>
        <HeaderApp
          iconLeft={'chevron-with-circle-left'}
          leftTouch={() => this.props.navigation.goBack()}
          title={'Native Smile'}
          iconRight={'edit'}
        />

        <Content scrollEnabled={false} padder>
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
          <ScrollableTabView renderTabBar={() => <CustomTabBar someProp={'here'} />} tabBarBackgroundColor='white' tabBarUnderlineStyle={{ backgroundColor: '#e7a23f', height: 2 }} tabBarActiveTextColor='black' tabBarInactiveTextColor='black' tabBarTextStyle={{ fontSize: 15 }} style={{ marginTop: 10, height: 400 }}>
            <PopularQuestion tabLabel='CÂU HỎI PHỔ BIẾN' />
            <MyQuestion tabLabel='CÂU HỎI CỦA TÔI' navigation={this.props.navigation} />
          </ScrollableTabView>
        </Content>
      </Container>
    );
  }
}

var styles = {
  wrapper: {
    paddingTop: 0
  },
  slide: {
  },
  image: {
    width: '100%',
    height: 280,
    marginTop: -50
  }
}

export default MainNativeSmile;
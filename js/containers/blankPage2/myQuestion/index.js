import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
const see = require("../../../../images/see.png");
const comment = require("../../../../images/comments.png");
const plus = require("../../../../images/plusCircle.png");

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
  Body,
  List,
  Thumbnail
} from "native-base";
var list = [{ name: 'Nguyen van A', email: 'Harrypotter@gmail.com', status: '16 phút trước' }, { name: 'Nguyen van B', email: 'Hermione@gmail.com', status: '28 phút trước' }]

class MyQuestion extends Component {
  renderRow(item) {
    return (
      <View style={styles.listItemWrap}>
        <View style={{ flexDirection: 'row' }}>
          <Thumbnail style={styles.image} source={{ uri: 'https://i.imgur.com/kSpaIGX.jpg' }} />
          <View style={styles.nameField}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
          <Right>
            <Text style={styles.status}>{item.status}</Text>
          </Right>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.body}>
          <Text style={styles.title}>NativeBase is a free and open source UI component</Text>
          <Text style={styles.description}>Create React Native project using the CRNA CLI.
              Refer this link for additional information CRNA </Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.footer}>
          <Left style={{ flexDirection: 'row' }}>
            <Image resizeMode='contain' style={styles.icon} source={see} />
            <Text style={styles.footerTextSee}>1390</Text>
            <View style={{ flexDirection: 'row', paddingTop: 2 }}>
              <Image resizeMode='contain' style={styles.icon} source={comment} />
              <Text style={styles.footerTextComment}>10 bình luận</Text>
            </View>
          </Left>
          <Right>
            <TouchableOpacity style={styles.buttonMore}>
              <Text style={styles.textMore}>Xem thêm</Text>
              <Icon name='ios-arrow-forward-outline' style={styles.iconMore} />
            </TouchableOpacity>
          </Right>
        </View>
      </View >
    )
  }

  render() {
    return (
      <Container style={{ paddingBottom: 20 }}>
        <Content>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("BlankPage")} style={styles.addQuestionSection}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={styles.iconPlus} source={plus} resizeMode='contain' />
              <Text style={styles.addQuestionText}>Thêm câu hỏi mới</Text>
              <Icon name='ios-arrow-forward-outline' style={styles.iconArrowAdd} />
            </View>
          </TouchableOpacity>
          <List style={{ marginTop: 10 }}>
            {
              list.map((item) => this.renderRow(item))
            }
          </List>
        </Content>
      </Container>
    );
  }
}

export default MyQuestion;

import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
const see = require("../../../../images/see.png");
const comment = require("../../../../images/comments.png");
const plus = require("../../../../images/plusCircle.png");
import { fetchMyQuestion } from "./actions";
import {
  UltimateListView,
  UltimateRefreshView
} from "react-native-ultimate-listview";
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
var list = [
  {
    name: "Nguyen van A",
    email: "Harrypotter@gmail.com",
    status: "16 phút trước"
  },
  { name: "Nguyen van B", email: "Hermione@gmail.com", status: "28 phút trước" }
];

class MyQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: "list",
      data: []
    };
  }

  componentDidMount() {
    this.props.fetchMyQuestion();
  }

  componentWillReceiveProps(props) {
    let data = props.fetch.data.data;
    this.setState({ data });
  }

  renderRow = (item, index, separator) => {
    return (
      <View key={index} style={styles.listItemWrap}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.image}
            source={{ uri: item.avatar }}
          />
          <View style={styles.nameField}>
            <Text style={styles.name}>{item.fullname}</Text>
            <Text style={styles.email}>{item.username}</Text>
          </View>
          <Right>
            <Text style={styles.status}>{item.time}</Text>
          </Right>
        </View>
        <View style={styles.divider} />
        <View style={styles.body}>
          <Text style={styles.title}>
            {item.answername}
          </Text>
          <Text style={styles.description}>
            {item.answerdes}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.footer}>
          <Left style={{ flexDirection: "row" }}>
            <Image resizeMode="contain" style={styles.icon} source={see} />
            <Text style={styles.footerTextSee}>1390</Text>
            <View style={{ flexDirection: "row", paddingTop: 2 }}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={comment}
              />
              <Text style={styles.footerTextComment}>10 bình luận</Text>
            </View>
          </Left>
          <Right>
            <TouchableOpacity style={styles.buttonMore}>
              <Text style={styles.textMore}>Xem thêm</Text>
              <Icon name="ios-arrow-forward-outline" style={styles.iconMore} />
            </TouchableOpacity>
          </Right>
        </View>
      </View>
    );
  };

  onFetch = async (page = 1, startFetch, abortFetch) => {
    try {
      //This is required to determinate whether the first loading list is all loaded.
      let pageLimit = 24;
      if (this.state.layout === "grid") pageLimit = 60;
      let skip = (page - 1) * pageLimit;

      //Generate dummy data
      let rowData = this.state.data;
      // rowData = Array.from(
      //   { length: pageLimit },
      //   (value, index) => `item -> ${index + skip}`
      // );
      //Simulate the end of the list if there is no more data returned from the server
      if (page === 10) {
        rowData = [];
      }

      //Simulate the network loading in ES7 syntax (async/await)
      // await this.sleep(2000);
      startFetch(rowData, pageLimit);
    } catch (err) {
      abortFetch(); //manually stop the refresh or pagination if it encounters network error
      console.log(err);
    }
  };

  render() {
    let renderMain = null;
    if (this.state.data.length > 0) {
      renderMain = (
        <UltimateListView
          onFetch={this.onFetch}
          ref={ref => (this.listView = ref)}
          key={this.state.layout}
          keyExtractor={(item, index) => `${index} - ${item}`}
          refreshableMode="advanced" // basic or advanced
          item={this.renderRow} // this takes three params (item, index, separator)
          displayDate
          arrowImageStyle={{ width: 20, height: 20, resizeMode: "contain" }}
        />
      );
    } else {
      renderMain = (
        <Text style={{ textAlign: "center", marginTop: 40 }}>
          There are no questions
        </Text>
      );
    }
    return (
      <Container style={{ paddingBottom: 20 }}>
        <Content>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("BlankPage")}
            style={styles.addQuestionSection}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.iconPlus}
                source={plus}
                resizeMode="contain"
              />
              <Text style={styles.addQuestionText}>Thêm câu hỏi mới</Text>
              <Icon
                name="ios-arrow-forward-outline"
                style={styles.iconArrowAdd}
              />
            </View>
          </TouchableOpacity>
          {renderMain}
        </Content>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    fetchMyQuestion: () => dispatch(fetchMyQuestion())
  };
}
const mapStateToProps = state => ({
  fetch: state.getMyQuestionReducer
});

export default connect(mapStateToProps, bindActions)(MyQuestion);

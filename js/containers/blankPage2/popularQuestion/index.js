import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Image } from "react-native";
import {
  UltimateListView,
  UltimateRefreshView
} from "react-native-ultimate-listview";
// import styles from "./styles";
const see = require("../../../../images/see.png");
const comment = require("../../../../images/comments.png");
import { fetchAllQuestion } from "./actions";
import { Button } from "react-native-elements";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Icon,
  Left,
  Right,
  Body,
  List,
  ListItem,
  Thumbnail
} from "native-base";
class PopularQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: "list",
      data: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllQuestion();
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
          {/* <Left style={{ flexDirection: 'row' }}>
            <Image resizeMode='contain' style={styles.icon} source={see} />
            <Text style={styles.footerTextSee}>1390</Text>
            <View style={{ flexDirection: 'row', paddingTop: 2 }}>
              <Image resizeMode='contain' style={styles.icon} source={comment} />
              <Text style={styles.footerTextComment}>10 bình luận</Text>
            </View>
          </Left> */}
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
    }else{
      renderMain = (
        <Text style={{textAlign:'center', marginTop:40}}>There are no questions</Text>
      )
    }
    return (
      <Container style={{ paddingBottom: 20 }}>
        <View>
          {renderMain}
        </View>
      </Container>
    );
  }
}

var styles = {
  image: {
    marginTop: 1,
    marginLeft: 4,
    height: 40,
    width: 40,
    borderRadius: 20
  },

  listItemWrap: {
    backgroundColor: "white",
    marginTop: 13,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingTop: 3
  },

  status: {
    fontSize: 12,
    color: "#919191",
    marginTop: 10,
    marginRight: 20
  },

  email: {
    fontSize: 12,
    color: "#696969"
  },
  divider: {
    height: 2,
    backgroundColor: "#f0f0f0",
    marginTop: 3,
    width: "100%"
  },
  nameField: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 5
  },
  body: {
    backgroundColor: "white",
    width: "100%",
    paddingLeft: 15,
    paddingTop: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "500"
  },
  footer: {
    width: "100%",
    backgroundColor: "white",
    height: 30,
    flexDirection: "row"
  },
  icon: {
    width: 23,
    height: 23,
    marginLeft: 10
  },
  footerTextComment: {
    fontSize: 12,
    color: "#919191",
    marginLeft: 5,
    marginTop: 1
  },
  footerTextSee: {
    fontSize: 12,
    color: "#919191",
    marginLeft: 5,
    marginTop: 3
  },
  description: {
    fontSize: 14
  },
  buttonMore: {
    height: 25,
    backgroundColor: "#e7a23f",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    marginRight: 6,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 1
  },
  iconMore: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginLeft: 5
  },
  textMore: {
    fontSize: 13,
    color: "white",
    marginBottom: 3
  }
};

function bindActions(dispatch) {
  return {
    fetchAllQuestion: () => dispatch(fetchAllQuestion())
  };
}
const mapStateToProps = state => ({
  fetch: state.getAllQuestionReducer
});

export default connect(mapStateToProps, bindActions)(PopularQuestion);

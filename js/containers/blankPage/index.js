import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Container, Title, Content,Input,Thumbnail, Text,Item, Button, Left, Right, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import TouchAble from 'react-native-touch-able';
import { Avatar, Icon } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

import HeaderApp from '../../components/Header';

import styles from './styles';
import * as Colors from '../../config/colors';
const radioImage = require('../../../images/radio_View.png');
class BlankPage extends Component {
    static navigationOptions = {
        header: null
    };
    static propTypes = {
        name: React.PropTypes.string,
        index: React.PropTypes.number,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func
    };
    constructor(props) {
        super(props);
        this.state = {
          typeQuestion:null
        };
      }

    renderTop() {
        return (
            <Grid style={styles.topContainer}>
                <Col style={styles.columnContainer} size={3}>
                    <Image source={radioImage} resizeMode="contain" style={styles.radioImage}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                        />
                    </Image>
                </Col>
                <Col size={5} style={styles.columnContainer}>
                    <Text style={styles.nameFont}> Tạ Bích Hạnh </Text>
                    <Text style={styles.emailFont}> Bichhanhta@gmail.com</Text>
                    <TouchAble onTouch={() => console.log('Edit')} style={styles.editButton}>
                        <Text style={styles.editButtonText}> Chinh Sua </Text>
                    </TouchAble>
                </Col>
                <Col size={1} style={styles.columnContainer}>
                    <TouchAble onTouch={() => console.log('Edit')} style={styles.socialWrapper}>
                        <Icon size={18} type="font-awesome" color="white" name={'facebook'} />
                    </TouchAble>
                    <TouchAble onTouch={() => console.log('Edit')} style={styles.socialWrapper}>
                        <Icon size={18} type="font-awesome" color="white" name={'twitter'} />
                    </TouchAble>
                    <TouchAble onTouch={() => console.log('Edit')} style={styles.socialWrapper}>
                        <Icon size={18} type="entypo" color="white" name={'google-'} />
                    </TouchAble>
                </Col>
            </Grid>
        );
    }

    renderCenter() {
      let data = [
        {
            value: 'Banana'
        },
        {
            value: 'Mango'
        },
        {
            value: 'Pear'
        }
    ];
    return (
        <View style={styles.centerContainer}>
            <Dropdown
                baseColor={'white'}
                renderBase={(props, label, value, renderAccessory) => 
                    <Item style={styles.selectWrapper}>
                        <Input
                            style={{height:30,color:"white"}}
                            value={this.state.typeQuestion}
                            editable={false}
                            placeholder={"Lựa chọn hình thức"}
                            pointerEvents="none"
                            placeholderTextColor="white"
                        />
                        <Icon size={18} type="font-awesome" color="white" name={'sort-down'} />
                        </Item>
                }
                dropdownPosition={-2.6}
                containerStyle={{marginLeft: 5, width: '100%' }}
                data={data}
                rippleCentered={true}
                rippleInsets={{top:0,bottom:0}}
                onChangeText={(value, index, data)=>{this.setState({typeQuestion:value})}}
            />
        </View>
    )
    }

    render() {
        const { props: { name, index, list } } = this;
        console.log(this.props.navigation, '000000000');
        return (
            <Container style={styles.container}>
                <HeaderApp
                    iconLeft={'chevron-with-circle-left'}
                    leftTouch={() => console.log('assasasa')}
                    title={'Câu hỏi của tôi'}
                />
                <Content>
                {this.renderTop()}
                {this.renderCenter()}
                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer())
    };
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, bindAction)(BlankPage);

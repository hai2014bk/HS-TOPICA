import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Container, Title, Content, Input, Thumbnail, Text, Item, Button, Left, Right, Body } from 'native-base';
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
            typeQuestion: null,
            headerQuestion: '',
            question: ''
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
            <View style={{ paddingTop: 15 }}>
                <View style={styles.centerContainer}>
                    <Text style={styles.h1Text}>Lựa chọn hình thức câu hỏi</Text>
                    <Dropdown
                        baseColor={'white'}
                        renderBase={(props, label, value, renderAccessory) => (
                            <Item style={styles.selectWrapper}>
                                <Input
                                    style={{ height: 30, color: 'white' }}
                                    value={this.state.typeQuestion}
                                    editable={false}
                                    placeholder={'Lựa chọn hình thức'}
                                    pointerEvents="none"
                                    placeholderTextColor="white"
                                />
                                <Icon size={18} type="font-awesome" color="white" name={'sort-down'} />
                            </Item>
                        )}
                        dropdownPosition={-2.6}
                        containerStyle={{ marginLeft: 5, marginTop: 5, width: '100%' }}
                        data={data}
                        rippleCentered={true}
                        rippleInsets={{ top: 0, bottom: 0 }}
                        onChangeText={(value, index, data) => {
                            this.setState({ typeQuestion: value });
                        }}
                    />
                </View>
                <View style={styles.centerContainer}>
                    <Text style={styles.blackH1Text}> Tiêu đề </Text>
                    <Item style={styles.headerItemWrapper}>
                        <View style={{ backgroundColor: Colors.MAINCOLOR, height: '100%', width: 5 }} />
                        <Input
                            style={{ height: 30, color: 'black', fontWeight: 'bold' }}
                            value={this.state.headerQuestion}
                            editable={true}
                            autoCapitalize={'characters'}
                            placeholder={'Tiêu đề câu hỏi'}
                            onChangeText={text => this.setState({ headerQuestion: text })}
                        />
                    </Item>
                </View>
                <View style={styles.centerContainer}>
                    <Text style={styles.blackH1Text}> Chi tiết nội dung</Text>
                    <View style={{minHeight: 160, backgroundColor: 'white', width: '100%', padding: 5, borderRadius: 3 }}>
                        <Input
                            style={{width: '100%', fontSize: 13, color: 'black' }}
                            value={this.state.question}
                            editable={true}
                            multiline={true}
                            onChangeText={text => this.setState({ question: text })}
                        />
                        <Item style={{borderBottomWidth: 0,width:"100%",justifyContent:"flex-end",backgroundColor:"white"}}>
                            <Icon iconStyle={styles.icon} size={22} type="entypo" color="gray" name={'emoji-happy'} />
                            <Icon iconStyle={styles.icon} size={22} type="entypo" color="gray" name={'camera'} />
                            <Icon iconStyle={styles.icon} size={22} type="material-community" color="gray" name={'sticker-emoji'} />
                            <Icon iconStyle={styles.icon} size={22} type="feather" color="gray" name={'plus-circle'} />

                    </Item>
                    </View>
                    {this.renderBtns()}
                </View>
            </View>
        );
    }
    renderBtns() {
        return (
            <Item style={{marginTop:10,justifyContent:"space-between",borderBottomWidth:0,alignSelf: 'flex-end', width:165}}>
                <TouchAble onTouch={()=>console.log("send")} style={[styles.button,{backgroundColor:Colors.MAINCOLOR}]}>
                    <Text style={{color:"white"}}> Gửi </Text>
                </TouchAble>
                <TouchAble onTouch={()=>this.props.navigation.goBack()} style={[styles.button,{backgroundColor:"gray"}]}>
                    <Text style={{color:"white"}}> Hủy bỏ </Text>
                </TouchAble>
            </Item>
        )
    }
    render() {
        const { props: { name, index, list } } = this;
        console.log(this.props.navigation, '000000000');
        return (
            <Container style={styles.container}>
                <HeaderApp
                    iconLeft={'chevron-with-circle-left'}
                    leftTouch={() => this.props.navigation.goBack()}
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

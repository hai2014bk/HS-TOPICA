import React, { Component } from 'react';
import { AsyncStorage, TouchableOpacity, InteractionManager, Image, StatusBar } from 'react-native';
import { Item, Input, View, Text, Button, Left, Right, Body, Header, Label } from 'native-base';
import TouchAble from 'react-native-touch-able';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements'

import styles from './styles';

class HeaderApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    leftButton() {
        if (this.props.leftTouch) {
            this.props.leftTouch();
        }
    }

    renderLeft() {
        if (this.props.iconLeft) {
            var { iconLeft } = this.props;
            return (
                <TouchAble
                    onTouch={() => {
                        this.leftButton();
                    }}
                    style={styles.iconWrapper}
                >
                    <Icon iconStyle={{alignSelf:"center"}} size={20} type="entypo" name={iconLeft} color="white" />
                </TouchAble>
            );
        } else {
            return null;
        }
    }

    rightButton() {
        if (this.props.rightTouch) {
            this.props.rightTouch();
        }
    }
    renderRight() {
        if (this.props.iconRight) {
            var { iconRight } = this.props;
            return (
                <TouchAble
                    onTouch={() => {
                        this.rightButton();
                    }}
                    style={styles.iconWrapperRight}
                >
                    <Icon name={iconRight} style={{ fontSize: 20, color: 'black' }} />
                </TouchAble>
            );
        }
        if (this.props.rightTittle) {
            var { rightTittle } = this.props;
            return (
                <TouchAble
                    onTouch={() => {
                        this.rightButton();
                    }}
                    style={styles.iconWrapperRight}
                >
                    <Text style={{ fontSize: 15, color: primary }}>{rightTittle}</Text>
                </TouchAble>
            );
        }
        return null;
    }
    render() {
        var title = this.props.title;
        return (
            <Header style={styles.header}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Left style={{ flexDirection: 'row' }}>{this.renderLeft()}</Left>
                <Item style={styles.titleWrapper}>
                    <Label style={styles.title}> {title} </Label>
                </Item>
                <Right style={{ flexDirection: 'row' }}>{this.renderRight()}</Right>
            </Header>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HeaderApp);

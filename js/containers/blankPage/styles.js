const React = require('react-native');
import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const { StyleSheet } = React;
import * as Colors from '../../config/colors';
import { Avatar } from 'react-native-elements';
export default {
    container: {
        backgroundColor: '#FBFAFA'
    },
    topContainer: {
        height: deviceHeight / 5,
        width: '100%',
        flex: 1,
        backgroundColor: Colors.MAINCOLOR
    },
    centerContainer: {
        width: deviceWidth,
        flex: 1,
        padding: 16,
        alignItems: 'center'
    },
    columnContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioImage: {
        width: deviceHeight / 5 * 4 / 5,
        height: deviceHeight / 5 * 4 / 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameFont: {
        alignSelf: 'flex-start',
        color: 'white',
        fontSize: 20
    },
    emailFont: {
        alignSelf: 'flex-start',
        color: 'white',
        fontSize: 15
    },
    editButtonText: {
        color: Colors.MAINCOLOR
    },
    socialWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 26,
        height: 26,
        marginTop: 5,
        borderRadius: 13,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'transparent'
    },
    dropdownContainerStyle: {
        backgroundColor: Colors.MAINCOLOR,
        width: '100%'
    },
    selectWrapper: {
        paddingRight: 10,
        borderRadius: 3,
        backgroundColor: Colors.MAINCOLOR,
        paddingLeft: 0,
        marginLeft: -5
    },
    editButton: {
        height: 30,
        width: 120,
        borderRadius: 15,
        marginTop: 10,
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: deviceHeight / 5 * 4 / 5 * 3 / 4,
        height: deviceHeight / 5 * 4 / 5 * 3 / 4,
        borderRadius: deviceHeight / 5 * 4 / 5 * 3 / 4 * 1 / 2
    }
};
